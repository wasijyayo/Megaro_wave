import { useState, useRef, useEffect, useCallback } from "react";
import R3FGameCanvas from "./R3FGameCanvas.jsx";
import HUD from "./HUD.jsx";
import { useWifiStats } from "../../hooks/useWifiStats.js";
import { useWiiBoard } from "../../hooks/useWiiBoard.js";
import { usePersonPoseAndSegmentation } from "../../hooks/usePersonPoseAndSegmentation.ts";
import { usePersonSegmentation } from "../../hooks/usePersonSegmentation.ts";
import { getWaveParams, calcWaveTilt } from "../../utils/waveParams.js";

// ── 定数 ──────────────────────────────────────────────────
const TOTAL_LIVES = 3;
const BALANCE_TOLERANCE = 1.28; // CoP と目標傾きの許容差 (-1〜1)
const IMBALANCE_TIMEOUT = 2000; // ms: この時間超えるとライフ -1
// ── ポーズ定義 ──────────────────────────────────────────
const POSE_LIST = [
  { id: "hands-behind-head", label: "両手を頭の後ろ", points: 1000 },
  { id: "hands-up", label: "両手を挙げる", points: 1000 },
  { id: "salute", label: "敬礼", points: 1000 },
  { id: "running-man", label: "ランニングマン", points: 1000 },
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

  // 右手首が右目の近く
  const rightWristNearEye =
    Math.abs(rightWrist.x - rightEye.x) < 0.12 &&
    Math.abs(rightWrist.y - rightEye.y) < 0.12;
  // 右肘が肩より高い
  const rightElbowRaised = rightElbow.y < rightShoulder.y + 0.1;
  // 左手首が肩より下
  const leftArmDown = leftWrist.y > leftShoulder.y + 0.1;

  return rightWristNearEye && rightElbowRaised && leftArmDown;
}

/** ランニングマン（ボルトポーズ） — 両腕を右上に向け、右腕を伸ばし左肘を曲げる */
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

  // 両腕が同じ方向（右上）を向いている: 両手首が体の中心より同じ側にある
  const shoulderCenterX = (leftShoulder.x + rightShoulder.x) / 2;
  const bothArmsToOneSide =
    (leftWrist.x < shoulderCenterX && rightWrist.x < shoulderCenterX) ||
    (leftWrist.x > shoulderCenterX && rightWrist.x > shoulderCenterX);

  // 両手首が肩より上にある
  const shoulderY = (leftShoulder.y + rightShoulder.y) / 2;
  const bothWristsRaised =
    leftWrist.y < shoulderY + 0.05 && rightWrist.y < shoulderY + 0.05;

  // 片方の肘が曲がっている（手首と肩の距離が短い ≒ 肘が曲がっている）
  const leftArmBent =
    Math.abs(leftWrist.x - leftShoulder.x) < 0.15 &&
    leftElbow.y < leftShoulder.y + 0.05;
  const rightArmExtended = Math.abs(rightWrist.x - rightShoulder.x) > 0.1;
  // または逆パターン
  const rightArmBent =
    Math.abs(rightWrist.x - rightShoulder.x) < 0.15 &&
    rightElbow.y < rightShoulder.y + 0.05;
  const leftArmExtended = Math.abs(leftWrist.x - leftShoulder.x) > 0.1;

  const boltPose =
    (leftArmBent && rightArmExtended) || (rightArmBent && leftArmExtended);

  return bothArmsToOneSide && bothWristsRaised && boltPose;
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
    default:
      return false;
  }
}

// ─────────────────────────────────────────────────────────
export default function GameScene({ playerName, onGameOver, wiiBoard }) {
  const elapsedTimeRef = useRef(0);

  // ── hooks ──
  const { downlink } = useWifiStats();
  const { connected: boardConnected, copRef, connect: connectBoard } = wiiBoard;

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

  // ── ゲームロジック用 refs (state 更新による effect 再起動を避ける) ──
  const scoreRef = useRef(0);
  const livesRef = useRef(TOTAL_LIVES);
  const imbalanceStartRef = useRef(null);
  const waveParamsRef = useRef(getWaveParams(downlink));
  const boardConnectedRef = useRef(false);
  const lastActionRef = useRef(null);
  const targetPoseActiveRef = useRef(false);
  const currentPoseRef = useRef(currentPose);

  // waveParams を ref に同期 (ゲームループ内で参照)
  useEffect(() => {
    waveParamsRef.current = getWaveParams(downlink);
  }, [downlink]);

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

  // ── メインゲームループ ──
  useEffect(() => {
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
        const newAction = {
          id: Date.now(),
          label: detectedAction.label,
          points: detectedAction.points,
        };
        lastActionRef.current = newAction;
        setLastAction(newAction);

        scoreRef.current += detectedAction.points;
        setScore(Math.floor(scoreRef.current));

        // ── ポーズ成功時: 次のランダムポーズに切り替え ──
        if (POSE_LIST.some((p) => p.id === detectedAction.id)) {
          const next = pickRandomPose(detectedAction.id);
          currentPoseRef.current = next;
          setCurrentPose(next);
          // ポーズ成功フラグをリセット
          targetPoseActiveRef.current = false;
          setTargetPoseActive(false);
        }
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
        scoreRef.current += wpf.difficultyMultiplier * 0.05;
        setScore(Math.floor(scoreRef.current));
      }
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [copRef, onGameOver]);

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
        waveParams={getWaveParams(downlink)}
        personCanvas={combinedCanvas}
        onElapsedTime={(t) => {
          elapsedTimeRef.current = t;
        }}
      />

      {/* レイヤー: HUD */}
      <HUD
        score={score}
        lives={lives}
        balance={balance}
        balanceRef={balanceRef}
        waveLabel={getWaveParams(downlink).label}
        difficultyMultiplier={getWaveParams(downlink).difficultyMultiplier}
        lastAction={lastAction}
        targetPose={currentPose}
        targetPoseActive={targetPoseActive}
      />

      <div style={s.maskStatus}>
        {segStatus} / {poseStatus}
      </div>

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
