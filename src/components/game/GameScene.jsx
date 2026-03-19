import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import R3FGameCanvas from "./R3FGameCanvas.jsx";
import HUD from "./HUD.jsx";
import PoseClearEffects from "./PoseClearEffects.jsx";
import { useWifiStats } from "../../hooks/useWifiStats.js";
import { useWiiBoard } from "../../hooks/useWiiBoard.js";
import { usePersonPoseAndSegmentation } from "../../hooks/usePersonPoseAndSegmentation.ts";
import { usePersonSegmentation } from "../../hooks/usePersonSegmentation.ts";
import { getWaveParams, calcWaveTilt } from "../../utils/waveParams.js";
import { ssidToStrokeArray } from "../../utils/strokeCount.js";
import { playSuccessChime } from "../../utils/poseClearSounds.js";

// ── 定数 ──────────────────────────────────────────────────
const TOTAL_LIVES = 100;
const BALANCE_TOLERANCE = 0.28; // CoP と目標傾きの許容差 (-1〜1)
const IMBALANCE_TIMEOUT = 20; // ms: この時間超えるとライフ -1
const COMBO_TIMEOUT = 4000; // ms: コンボが切れるまでの時間
const COMBO_SCORE_MULTIPLIER = 1.1;

function getComboMultiplier(comboCount) {
  if (comboCount <= 0) return 1;
  return COMBO_SCORE_MULTIPLIER ** comboCount;
}
// ── ポーズ定義 ──────────────────────────────────────────
const POSE_LIST = [
  { id: "hands-behind-head", label: "両手を頭の後ろ", points: 1000 },
  { id: "hands-up", label: "両手を挙げる", points: 1000 },
  { id: "salute", label: "敬礼", points: 1000 },
  { id: "running-man", label: "ランニングマン", points: 1000 },
  { id: "right-up-left-side", label: "右手を上、左手を横", points: 1000 },
  { id: "hands-back", label: "後ろで手を組む", points: 1000 },
  { id: "double-biceps", label: "両腕を曲げて力こぶ", points: 1000 },
];

/** 現在と異なるランダムなポーズを返す */
function pickRandomPose(currentId) {
  const candidates = POSE_LIST.filter((p) => p.id !== currentId);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

// ── ポーズ判定関数 ─────────────────────────────────────

/** 両手を頭の後ろに組む */
function isHandsBehindHeadPose(lm) {
  if (
    !lm?.[7] ||
    !lm?.[8] ||
    !lm?.[11] ||
    !lm?.[12] ||
    !lm?.[13] ||
    !lm?.[14] ||
    !lm?.[15] ||
    !lm?.[16]
  ) {
    return false;
  }
  const leftShoulder = lm[11],
    rightShoulder = lm[12];
  const leftElbow = lm[13],
    rightElbow = lm[14];
  const leftWrist = lm[15],
    rightWrist = lm[16];
  const leftEar = lm[7],
    rightEar = lm[8];
  const shoulderY = (leftShoulder.y + rightShoulder.y) / 2;

  const leftWristNearHead =
    leftWrist.y < shoulderY + 0.08 &&
    Math.abs(leftWrist.x - leftEar.x) < 0.12 &&
    Math.abs(leftWrist.y - leftEar.y) < 0.14;
  const rightWristNearHead =
    rightWrist.y < shoulderY + 0.08 &&
    Math.abs(rightWrist.x - rightEar.x) < 0.12 &&
    Math.abs(rightWrist.y - rightEar.y) < 0.14;
  const elbowsRaised =
    leftElbow.y < leftShoulder.y + 0.12 &&
    rightElbow.y < rightShoulder.y + 0.12;

  return leftWristNearHead && rightWristNearHead && elbowsRaised;
}

/** 両手を挙げる — 両手首が鼻より上、肘も肩より上 */
function isHandsUpPose(lm) {
  if (
    !lm?.[0] ||
    !lm?.[11] ||
    !lm?.[12] ||
    !lm?.[13] ||
    !lm?.[14] ||
    !lm?.[15] ||
    !lm?.[16]
  ) {
    return false;
  }
  const nose = lm[0];
  const leftShoulder = lm[11],
    rightShoulder = lm[12];
  const leftElbow = lm[13],
    rightElbow = lm[14];
  const leftWrist = lm[15],
    rightWrist = lm[16];

  const bothWristsAboveHead = leftWrist.y < nose.y && rightWrist.y < nose.y;
  const bothElbowsAboveShoulders =
    leftElbow.y < leftShoulder.y && rightElbow.y < rightShoulder.y;

  return bothWristsAboveHead && bothElbowsAboveShoulders;
}

/** 敬礼 — 右手首が右目付近、左腕は下がっている */
function isSalutePose(lm) {
  if (
    !lm?.[5] ||
    !lm?.[11] ||
    !lm?.[12] ||
    !lm?.[14] ||
    !lm?.[15] ||
    !lm?.[16]
  ) {
    return false;
  }
  const rightEye = lm[5];
  const leftShoulder = lm[11],
    rightShoulder = lm[12];
  const rightElbow = lm[14];
  const leftWrist = lm[15],
    rightWrist = lm[16];

  const rightWristNearEye =
    Math.abs(rightWrist.x - rightEye.x) < 0.12 &&
    Math.abs(rightWrist.y - rightEye.y) < 0.12;
  const rightElbowRaised = rightElbow.y < rightShoulder.y + 0.1;
  const leftArmDown = leftWrist.y > leftShoulder.y + 0.1;

  return rightWristNearEye && rightElbowRaised && leftArmDown;
}

/** ランニングマン — 片腕を斜め上に伸ばし、もう片腕を下に曲げる */
function isRunningManPose(lm) {
  if (
    !lm?.[11] ||
    !lm?.[12] ||
    !lm?.[13] ||
    !lm?.[14] ||
    !lm?.[15] ||
    !lm?.[16]
  ) {
    return false;
  }
  const leftShoulder = lm[11],
    rightShoulder = lm[12];
  const leftElbow = lm[13],
    rightElbow = lm[14];
  const leftWrist = lm[15],
    rightWrist = lm[16];

  const shoulderY = (leftShoulder.y + rightShoulder.y) / 2;

  const rightArmUp =
    rightWrist.y < shoulderY - 0.05 &&
    rightElbow.y < rightShoulder.y + 0.05;
  const leftArmDown =
    leftWrist.y > leftShoulder.y + 0.05 &&
    leftElbow.y > leftShoulder.y - 0.05;

  const leftArmUp =
    leftWrist.y < shoulderY - 0.05 &&
    leftElbow.y < leftShoulder.y + 0.05;
  const rightArmDown =
    rightWrist.y > rightShoulder.y + 0.05 &&
    rightElbow.y > rightShoulder.y - 0.05;

  return (rightArmUp && leftArmDown) || (leftArmUp && rightArmDown);
}

function isRightUpLeftSidePose(lm) {
  if (
    !lm?.[0] ||
    !lm?.[12] ||
    !lm?.[14] ||
    !lm?.[16]
  ) {
    return false;
  }

  const nose = lm[0];
  const rightShoulder = lm[12];
  const rightElbow = lm[14];
  const rightWrist = lm[16];
  const dx = rightWrist.x - rightShoulder.x;
  const dy = rightWrist.y - rightShoulder.y;
  const armLength = Math.hypot(dx, dy);

  const rightArmUp =
    rightWrist.y < nose.y + 0.18 &&
    rightElbow.y < rightShoulder.y + 0.24 &&
    dy < -0.22 &&
    dx > 0.02 &&
    armLength > 0.32;

  return rightArmUp;
}

function isHandsBackPose(lm) {
  if (
    !lm?.[11] ||
    !lm?.[12] ||
    !lm?.[13] ||
    !lm?.[14] ||
    !lm?.[15] ||
    !lm?.[16] ||
    !lm?.[23] ||
    !lm?.[24]
  ) {
    return false;
  }

  const leftShoulder = lm[11], rightShoulder = lm[12];
  const leftElbow = lm[13], rightElbow = lm[14];
  const leftWrist = lm[15], rightWrist = lm[16];
  const leftHip = lm[23], rightHip = lm[24];

  const shoulderCenterX = (leftShoulder.x + rightShoulder.x) / 2;
  const shoulderCenterY = (leftShoulder.y + rightShoulder.y) / 2;
  const hipCenterY = (leftHip.y + rightHip.y) / 2;
  const shoulderSpan = Math.abs(rightShoulder.x - leftShoulder.x);

  const wristsBehindBack =
    Math.abs(leftWrist.x - shoulderCenterX) < shoulderSpan * 0.45 &&
    Math.abs(rightWrist.x - shoulderCenterX) < shoulderSpan * 0.45 &&
    leftWrist.y > shoulderCenterY + 0.02 &&
    rightWrist.y > shoulderCenterY + 0.02 &&
    leftWrist.y < hipCenterY + 0.16 &&
    rightWrist.y < hipCenterY + 0.16;

  const elbowsBack =
    leftElbow.y > leftShoulder.y &&
    rightElbow.y > rightShoulder.y &&
    Math.abs(leftElbow.x - shoulderCenterX) < shoulderSpan * 0.8 &&
    Math.abs(rightElbow.x - shoulderCenterX) < shoulderSpan * 0.8;

  return wristsBehindBack && elbowsBack;
}

function isDoubleBicepsPose(lm) {
  if (
    !lm?.[11] ||
    !lm?.[12] ||
    !lm?.[13] ||
    !lm?.[14] ||
    !lm?.[15] ||
    !lm?.[16]
  ) {
    return false;
  }

  const leftShoulder = lm[11], rightShoulder = lm[12];
  const leftElbow = lm[13], rightElbow = lm[14];
  const leftWrist = lm[15], rightWrist = lm[16];
  const shoulderY = (leftShoulder.y + rightShoulder.y) / 2;

  const leftArmFlex =
    Math.abs(leftElbow.y - shoulderY) < 0.14 &&
    leftWrist.y < leftShoulder.y;

  const rightArmFlex =
    Math.abs(rightElbow.y - shoulderY) < 0.14 &&
    rightWrist.y < rightShoulder.y;

  return leftArmFlex && rightArmFlex;
}

/** ポーズIDに応じた判定関数のディスパッチ */
function checkPose(poseId, lm) {
  switch (poseId) {
    case "hands-behind-head":
      return isHandsBehindHeadPose(lm);
    case "hands-up":
      return isHandsUpPose(lm);
    case "salute":
      return isSalutePose(lm);
    case "running-man":
      return isRunningManPose(lm);
    case "right-up-left-side":
      return isRightUpLeftSidePose(lm);
    case "hands-back":
      return isHandsBackPose(lm);
    case "double-biceps":
      return isDoubleBicepsPose(lm);
    default:
      return false;
  }
}

// ─────────────────────────────────────────────────────────
export default function GameScene({ playerName, onGameOver, wiiBoard, waveParamsOverride, onScoreChange, selectedWifi, remoteVideoTrack, remoteVideoElement }) {
  const elapsedTimeRef = useRef(0);

  // ── hooks ──
  const { downlink } = useWifiStats();
  const { connected: boardConnected, copRef, connect: connectBoard } = wiiBoard;

  const effectiveWaveParams = useMemo(() => {
    if (waveParamsOverride) return waveParamsOverride;
    if (selectedWifi) {
      return getWaveParams({
        downlink: selectedWifi.fast,
        strength: selectedWifi.fast,
        ssid: selectedWifi.ssid
      });
    }
    return getWaveParams(downlink);
  }, [waveParamsOverride, selectedWifi, downlink]);

  // ポーズ検知フック（骨格描画のみ）
  const {
    canvas: poseCanvas,
    status: poseStatus,
    poseData,
  } = usePersonPoseAndSegmentation();
  // セグメンテーション（人物マスク・描画）フック
  const { canvas: segCanvas, status: segStatus } = usePersonSegmentation();
  // セグメント + ポーズを重ねる合成キャンバス
  const [combinedCanvas] = useState(() => {
    const c = document.createElement("canvas");
    c.width = 720;
    c.height = 1280;
    return c;
  });

  // segCanvas と poseCanvas を合成して combinedCanvas に書き込む
  useEffect(() => {
    let raf = 0;
    function loop() {
      if (!segCanvas || !poseCanvas) {
        raf = requestAnimationFrame(loop);
        return;
      }

      if (
        combinedCanvas.width !== segCanvas.width ||
        combinedCanvas.height !== segCanvas.height
      ) {
        combinedCanvas.width = segCanvas.width;
        combinedCanvas.height = segCanvas.height;
      }

      const ctx = combinedCanvas.getContext("2d");
      if (!ctx) {
        raf = requestAnimationFrame(loop);
        return;
      }
      ctx.clearRect(0, 0, combinedCanvas.width, combinedCanvas.height);
      // セグメント映像を下地に描画
      ctx.drawImage(
        segCanvas,
        0,
        0,
        combinedCanvas.width,
        combinedCanvas.height,
      );
      // ポーズ（骨格）は上に重ねる
      ctx.drawImage(
        poseCanvas,
        0,
        0,
        combinedCanvas.width,
        combinedCanvas.height,
      );

      raf = requestAnimationFrame(loop);
    }
    loop();
    return () => cancelAnimationFrame(raf);
  }, [segCanvas, poseCanvas, combinedCanvas]);

  // ── UI state ──

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(TOTAL_LIVES);
  const [balance, setBalance] = useState({
    copX: 0,
    targetX: 0,
    ok: true,
    boardConnected: false,
  });
  // React state を経由せず毎フレーム直接書き込む（BalanceMeter の低遅延更新用）
  const balanceRef = useRef({ copX: 0, calibratedX: 0, targetX: 0, ok: true, boardConnected: false });
  const [lastAction, setLastAction] = useState(null);
  const [targetPoseActive, setTargetPoseActive] = useState(false);
  // ── ランダムポーズ管理 ──
  const [currentPose, setCurrentPose] = useState(
    () => POSE_LIST[Math.floor(Math.random() * POSE_LIST.length)],
  );
  // ── ポーズクリアエフェクト ──
  const [poseClearEvent, setPoseClearEvent] = useState(null);
  const comboRef = useRef(0);
  const [combo, setCombo] = useState(0);
  const comboExpiryRef = useRef(0); // timestamp when combo expires
  const [comboExpiryTime, setComboExpiryTime] = useState(0);

  // ── ゲームロジック用 refs (state 更新による effect 再起動を避ける) ──
  const scoreRef = useRef(0);
  const livesRef = useRef(TOTAL_LIVES);
  const imbalanceStartRef = useRef(null);
  const waveParamsRef = useRef(effectiveWaveParams);
  const boardConnectedRef = useRef(false);
  const lastActionRef = useRef(null);
  const targetPoseActiveRef = useRef(false);
  const currentPoseRef = useRef(currentPose);

  // waveParams を ref に同期
  useEffect(() => {
    waveParamsRef.current = effectiveWaveParams;
  }, [effectiveWaveParams]);

  // onScoreChange コールバックを ref で保持（再レンダー不要）
  const onScoreChangeRef = useRef(onScoreChange);
  useEffect(() => { onScoreChangeRef.current = onScoreChange }, [onScoreChange]);

  const addScoreRef = useRef((basePoints, comboCountOverride = null) => {
    const now = performance.now();
    const comboActive = comboRef.current >= 1 && comboExpiryRef.current > now;
    const comboCount = comboCountOverride ?? (comboActive ? comboRef.current : 0);
    const earnedPoints = basePoints * getComboMultiplier(comboCount);
    scoreRef.current += earnedPoints;
    const nextScore = Math.floor(scoreRef.current);
    setScore(nextScore);
    onScoreChangeRef.current?.(nextScore);
    return earnedPoints;
  });

  useEffect(() => {
    boardConnectedRef.current = boardConnected;
  }, [boardConnected]);

  const poseDataRef = useRef(null);
  useEffect(() => {
    poseDataRef.current = poseData;
  }, [poseData]);

  // currentPose を ref に同期
  useEffect(() => {
    currentPoseRef.current = currentPose;
  }, [currentPose]);

  // ── ゲーム準備チェック ──
  const [apiReady, setApiReady] = useState(false);
  useEffect(() => {
    setApiReady(false);
    ssidToStrokeArray(waveParamsRef.current.ssid).then(() => {
      setApiReady(true);
    });
  }, [waveParamsRef.current.ssid]);

  const isGameReady = apiReady && poseStatus === "実行中" && segStatus === "実行中";

  // ── メインゲームループ ──
  useEffect(() => {
    if (!isGameReady) return;

    let rafId;

    const loop = (timestamp) => {
      rafId = requestAnimationFrame(loop);

      const wpf = waveParamsRef.current;
      const elapsedTime = elapsedTimeRef.current;
      const currentPoseData = poseDataRef.current;

      // ── ポーズ判定 (MediaPipe Landmarks) ──

      const activePose = currentPoseRef.current;
      let detectedAction = null;
      if (
        currentPoseData &&
        currentPoseData.landmarks &&
        currentPoseData.landmarks.length > 0
      ) {
        const lm = currentPoseData.landmarks[0];

        // 現在の目標ポーズを判定
        const isTargetPose = checkPose(activePose.id, lm);
        if (isTargetPose !== targetPoseActiveRef.current) {
          targetPoseActiveRef.current = isTargetPose;
          setTargetPoseActive(isTargetPose);
        }

        if (isTargetPose) {
          detectedAction = activePose;
        } else if (lm[25] && lm[26]) {
          const kneeY = Math.min(lm[25].y, lm[26].y);
          const maxKneeY = Math.max(lm[25].y, lm[26].y);
          if (maxKneeY > 0.75) {
            detectedAction = { label: "Squat", points: 500 };
          } else if (kneeY < 0.5) {
            detectedAction = { label: "Jump", points: 500 };
          }
        }

        if (!detectedAction && lm[11] && lm[12] && lm[15] && lm[16]) {
          if (lm[16].y < lm[12].y && lm[15].y > lm[11].y) {
            detectedAction = { label: "Right Up, Left Down", points: 500 };
          }
        }
      } else if (targetPoseActiveRef.current) {
        targetPoseActiveRef.current = false;
        setTargetPoseActive(false);
      }

      if (
        detectedAction &&
        (!lastActionRef.current ||
          lastActionRef.current.label !== detectedAction.label)
      ) {
        const isPoseAction = POSE_LIST.some((p) => p.id === detectedAction.id);
        let earnedPoints = detectedAction.points;

        // ── ポーズ成功時: 次のランダムポーズに切り替え + エフェクト ──
        if (isPoseAction) {
          // コンボ加算
          comboRef.current += 1;
          const currentCombo = comboRef.current;
          setCombo(currentCombo);
          comboExpiryRef.current = performance.now() + COMBO_TIMEOUT;
          setComboExpiryTime(comboExpiryRef.current);
          earnedPoints = addScoreRef.current(detectedAction.points, currentCombo);

          // サウンド再生
          playSuccessChime(currentCombo);

          // ビジュアルエフェクト発火
          const displayPoints = Math.round(earnedPoints);
          const newAction = {
            id: Date.now(),
            label: detectedAction.label,
            points: displayPoints,
          };
          lastActionRef.current = newAction;
          setLastAction(newAction);
          setPoseClearEvent({
            id: newAction.id,
            label: detectedAction.label,
            points: displayPoints,
            combo: currentCombo,
          });

          const next = pickRandomPose(detectedAction.id);
          currentPoseRef.current = next;
          setCurrentPose(next);
          // ポーズ成功フラグをリセット
          targetPoseActiveRef.current = false;
          setTargetPoseActive(false);
        } else {
          earnedPoints = addScoreRef.current(detectedAction.points);
          const newAction = {
            id: Date.now(),
            label: detectedAction.label,
            points: Math.round(earnedPoints),
          };
          lastActionRef.current = newAction;
          setLastAction(newAction);
        }
        // コンボは4秒タイマーでのみリセット（非ポーズアクションでは維持）
      } else if (!detectedAction && lastActionRef.current) {
        lastActionRef.current = null;
      }

      // ── バランス判定 ──
      const targetX = calcWaveTilt(
        wpf.amplitude,
        wpf.frequency,
        wpf.speed,
        wpf.turbulence,
        elapsedTime,
      );
      const copX = boardConnectedRef.current ? copRef.current.x : 0;
      const calibratedX = boardConnectedRef.current ? copRef.current.x : 0;
      const diff = Math.abs(targetX - copX);
      const ok = diff < BALANCE_TOLERANCE;

      balanceRef.current = { copX, calibratedX, targetX, ok, boardConnected: boardConnectedRef.current };
      setBalance({ copX, calibratedX, targetX, ok, boardConnected: boardConnectedRef.current });

      if (!ok) {
        if (!imbalanceStartRef.current) {
          imbalanceStartRef.current = timestamp;
        } else if (timestamp - imbalanceStartRef.current > IMBALANCE_TIMEOUT) {
          imbalanceStartRef.current = null;
          livesRef.current -= 1;
          setLives(livesRef.current);
          if (livesRef.current <= 0) {
            onGameOver(Math.floor(scoreRef.current));
            return;
          }
        }
      } else {
        imbalanceStartRef.current = null;
        // バランス維持ボーナス (微量)
        addScoreRef.current(wpf.difficultyMultiplier * 0.05);
      }
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [copRef, onGameOver, isGameReady]);

  useEffect(() => {
    if (comboRef.current <= 0 || comboExpiryRef.current <= 0) {
      return undefined;
    }

    const remainingMs = Math.max(comboExpiryRef.current - performance.now(), 0);

    const timeoutId = window.setTimeout(() => {
      comboRef.current = 0;
      comboExpiryRef.current = 0;
      setCombo(0);
      setComboExpiryTime(0);
    }, remainingMs);

    return () => window.clearTimeout(timeoutId);
  }, [combo, comboExpiryTime]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <R3FGameCanvas
        waveParams={effectiveWaveParams}
        personCanvas={combinedCanvas}
        remoteVideoTrack={remoteVideoTrack}
        remoteVideoElement={remoteVideoElement}
        calibratedRef={copRef}
        onElapsedTime={(t) => {
          elapsedTimeRef.current = t;
        }}
      />

      {/* レイヤー: HUD */}
      <HUD
        score={score}
        lives={lives}
        maxLives={TOTAL_LIVES}
        balance={balance}
        balanceRef={balanceRef}
        waveLabel={effectiveWaveParams.label}
        difficultyMultiplier={effectiveWaveParams.difficultyMultiplier}
        combo={combo}
        comboMultiplier={getComboMultiplier(combo)}
        comboExpiryTime={comboExpiryTime}
        comboDuration={COMBO_TIMEOUT}
        lastAction={lastAction}
        targetPose={currentPose}
        targetPoseActive={targetPoseActive}
      />

      {/* レイヤー: ポーズクリアエフェクト */}
      <PoseClearEffects event={poseClearEvent} />

      <div style={s.maskStatus}>
        {segStatus} / {poseStatus}
      </div>

      {/* ロード画面（準備中） */}
      {!isGameReady && (
        <div style={s.loadingOverlay}>
          <style>{`
            @keyframes scanline {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(100vh); }
            }
            @keyframes pulseGlow {
              0% { text-shadow: 0 0 5px #0ff; }
              50% { text-shadow: 0 0 20px #0ff; }
              100% { text-shadow: 0 0 5px #0ff; }
            }
          `}</style>
          <div style={s.loadingBox}>
            <div style={s.scanline} />
            <h2 style={s.loadingTitle}>SYSTEM INITIALIZATION</h2>
            
            <div style={s.statusRow}>
              <span style={s.statusLabel}>NEURAL_API_CORE</span>
              <span style={{...s.statusValue, color: apiReady ? "#0ff" : "#ffaa00"}}>{apiReady ? "[ ONLINE ]" : "[ HEATING... ]"}</span>
            </div>
            
            <div style={s.statusRow}>
              <span style={s.statusLabel}>MOTION_TRACKING</span>
              <span style={{...s.statusValue, color: poseStatus === '実行中' ? "#0ff" : "#f0f"}}>{poseStatus || "SCANNING..."}</span>
            </div>
            
            <div style={s.statusRow}>
              <span style={s.statusLabel}>ENVIRONMENT_MAP</span>
              <span style={{...s.statusValue, color: segStatus === '実行中' ? "#0ff" : "#f0f"}}>{segStatus || "ANALYZING..."}</span>
            </div>
            
            <div style={s.progressBarContainer}>
              <div style={{
                ...s.progressBarFill, 
                width: `${(apiReady ? 33 : 0) + (poseStatus === '実行中' ? 33 : 0) + (segStatus === '実行中' ? 34 : 0)}%`
              }} />
            </div>
          </div>
        </div>
      )}

      {/* Wii Board 接続ボタン */}
      {!boardConnected && (
        <button onClick={connectBoard} style={s.boardBtn}>
          Wii Board 接続
        </button>
      )}
    </div>
  );
}

const s = {
  maskStatus: {
    position: "absolute",
    top: 12,
    left: 12,
    background: "rgba(0,0,0,0.55)",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: 6,
    fontSize: 13,
    fontFamily: "monospace",
    pointerEvents: "none",
    lineHeight: 1.5,
    zIndex: 20,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 5, 10, 0.85)",
    backdropFilter: "blur(8px)",
    color: "#0ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    zIndex: 50,
    overflow: "hidden",
  },
  loadingBox: {
    border: "1px solid rgba(0, 255, 255, 0.4)",
    backgroundColor: "rgba(6, 17, 33, 0.7)",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1)",
    position: "relative",
    overflow: "hidden",
    minWidth: "360px",
  },
  scanline: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "10px",
    background: "linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.4), transparent)",
    animation: "scanline 3s linear infinite",
    pointerEvents: "none",
  },
  loadingTitle: {
    margin: "0 0 30px 0",
    fontSize: "22px",
    letterSpacing: "4px",
    textAlign: "center",
    textTransform: "uppercase",
    animation: "pulseGlow 2s infinite",
    borderBottom: "1px solid rgba(0, 255, 255, 0.3)",
    paddingBottom: "15px",
  },
  statusRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0",
    fontSize: "14px",
    letterSpacing: "1px",
  },
  statusLabel: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  statusValue: {
    fontWeight: "bold",
    textShadow: "0 0 8px currentColor",
  },
  progressBarContainer: {
    width: "100%",
    height: "6px",
    backgroundColor: "rgba(0, 255, 255, 0.1)",
    marginTop: "30px",
    borderRadius: "3px",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#0ff",
    boxShadow: "0 0 10px #0ff",
    transition: "width 0.5s ease-out",
  },
  boardBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: "8px 18px",
    background: "#1a4fc4",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 13,
    zIndex: 20,
  },
};
