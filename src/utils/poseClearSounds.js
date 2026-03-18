// ── ポーズクリア時のサウンドエフェクト (Web Audio API) ──

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // suspended 状態なら resume（ユーザー操作後に必要）
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * 成功チャイム + コンボ音
 * combo が増えるほど基音が上がる（半音ずつ、最大8段階）
 * ピロリン♪ = 2つの短い音を連続再生
 */
export function playSuccessChime(combo = 1) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // コンボに応じて半音ずつ上昇（C5=523Hz 基準）
    const semitoneShift = Math.min(combo - 1, 8);
    const baseFreq = 523 * Math.pow(2, semitoneShift / 12);

    // 音量（コンボが高いほど少し大きく、最大0.3）
    const volume = Math.min(0.15 + combo * 0.02, 0.3);

    // ── 1音目 ──
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq, now);
    gain1.gain.setValueAtTime(volume, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.15);

    // ── 2音目（5度上、少し遅延） ──
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(baseFreq * 1.5, now + 0.08);
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.setValueAtTime(volume, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.28);

    // ── 3音目（高コンボ時のみ: オクターブ上） ──
    if (combo >= 3) {
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(baseFreq * 2, now + 0.16);
      gain3.gain.setValueAtTime(0, now);
      gain3.gain.setValueAtTime(volume * 0.6, now + 0.16);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc3.connect(gain3);
      gain3.connect(ctx.destination);
      osc3.start(now + 0.16);
      osc3.stop(now + 0.4);
    }
  } catch (e) {
    // Audio API 未対応の場合は無視
    console.warn('Audio playback failed:', e);
  }
}
