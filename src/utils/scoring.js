export const ACTIONS = {
  JUMP:    { key: 'jump',    label: 'ジャンプ!',    basePoints: 100 },
  TRICK:   { key: 'trick',   label: 'トリック!!',   basePoints: 250 },
  CROUCH:  { key: 'crouch',  label: 'ダック!',      basePoints:  50 },
  BALANCE: { key: 'balance', label: 'バランス+',    basePoints:   1 }, // per tick
}

export function calcPoints(action, difficultyMultiplier) {
  return Math.round(action.basePoints * difficultyMultiplier)
}
