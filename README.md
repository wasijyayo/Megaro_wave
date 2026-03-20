# MEGARO WAVE

MEGARO WAVE は、Wii Balance Board と MediaPipe を使って遊ぶブラウザベースのサーフィンゲームです。  
体重移動は Wii Balance Board、ポーズ判定と人物切り抜きは MediaPipe、3D 表現は React Three Fiber、認証と対戦補助は Firebase / LiveKit で構成されています。

## Features

- Wii Balance Board の荷重センサーから重心を取得
- MediaPipe Pose によるポーズ判定
- MediaPipe Image Segmenter による背景透過
- React Three Fiber による 3D 演出
- Firebase Authentication / Firestore によるユーザー管理とスコア保存
- LiveKit を使った対戦モード

## Tech Stack

- React 18
- Vite
- Three.js
- @react-three/fiber
- @react-three/drei
- @react-three/postprocessing
- @mediapipe/tasks-vision
- Firebase
- LiveKit

## Requirements

- Node.js 18 以上を推奨
- npm
- 対応ブラウザ
  - カメラ利用のため `getUserMedia()` 対応が必要
  - Wii Balance Board 利用時は WebHID 対応ブラウザが必要
- カメラ
- Wii Balance Board を使う場合は接続可能な実機

## Setup

### 1. Install dependencies

```bash
npm install
```

Cloud Functions を使う場合は `functions` 側も入れてください。

```bash
cd functions
npm install
```

### 2. Configure environment variables

ルートに `.env` を用意し、Firebase の設定値を入れます。

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Firebase 未設定でも一部画面は動きますが、認証、ランキング、対戦用トークン取得は使えません。

### 3. Run the app

```bash
npm run dev
```

ビルド確認:

```bash
npm run build
npm run preview
```

## Firebase / LiveKit

対戦モードでは Firebase Functions から LiveKit の接続トークンを発行します。

- フロントエンド: [src/firebase.js](/mnt/c/Users/ikino/Megaro_wave/src/firebase.js)
- Functions: [functions/index.js](/mnt/c/Users/ikino/Megaro_wave/functions/index.js)

Functions 側では以下の Secret が必要です。

- `LIVEKIT_API_KEY`
- `LIVEKIT_API_SECRET`
- `LIVEKIT_URL`

Functions のローカル起動:

```bash
cd functions
npm run serve
```

デプロイ:

```bash
cd functions
npm run deploy
```

## How It Works

### Wii Balance Board

[src/hooks/useWiiBoard.js](/mnt/c/Users/ikino/Megaro_wave/src/hooks/useWiiBoard.js) で WebHID を使い、4つの荷重センサー値から重心を計算しています。

- `navigator.hid.requestDevice()` でデバイス選択
- センサー値から CoP を算出
- キャリブレーションと感度調整に対応

### MediaPipe Pose

[src/hooks/usePersonPoseAndSegmentation.ts](/mnt/c/Users/ikino/Megaro_wave/src/hooks/usePersonPoseAndSegmentation.ts) で `PoseLandmarker` を実行し、`poseData.landmarks[0]` から1人分の骨格座標を取得しています。

- `pose_landmarker_lite` を利用
- `delegate: 'GPU'` で実行
- `numPoses: 1` に制限
- 骨格のオーバーレイ描画もここで実施

### Background Removal

[src/hooks/usePersonSegmentation.ts](/mnt/c/Users/ikino/Megaro_wave/src/hooks/usePersonSegmentation.ts) で `ImageSegmenter` により人物マスクを作成し、`destination-in` を使って背景を透明化しています。

- カメラ映像を canvas に描画
- 人物マスクを生成
- `globalCompositeOperation = 'destination-in'` で人物のみ残す
- 配信用にグリーンバック canvas も生成

### Shared Camera

[src/hooks/useSharedCamera.ts](/mnt/c/Users/ikino/Megaro_wave/src/hooks/useSharedCamera.ts) でカメラ入力を共有し、ポーズ検出と背景透過で同じ `MediaStream` / `video` を使い回しています。  
これにより `getUserMedia()` の重複呼び出しを避けています。

### Game Flow

- [src/components/HomeScreen.jsx](/mnt/c/Users/ikino/Megaro_wave/src/components/HomeScreen.jsx)
  - ホーム画面
- [src/components/game/StartScreen.jsx](/mnt/c/Users/ikino/Megaro_wave/src/components/game/StartScreen.jsx)
  - スタート画面
- [src/components/game/GameScene.jsx](/mnt/c/Users/ikino/Megaro_wave/src/components/game/GameScene.jsx)
  - メインゲーム
- [src/components/game/R3FGameCanvas.jsx](/mnt/c/Users/ikino/Megaro_wave/src/components/game/R3FGameCanvas.jsx)
  - 3D 描画
- [src/components/battle/BattleSession.jsx](/mnt/c/Users/ikino/Megaro_wave/src/components/battle/BattleSession.jsx)
  - 対戦モード

## Project Structure

```text
src/
  components/
    battle/      対戦画面
    game/        ゲーム本編
    r3f/         Three.js / R3F 表示
  contexts/      React Context
  hooks/         カメラ、MediaPipe、Wii Board、LiveKit 連携
  utils/         スコア計算、波パラメータなど
  firebase.js    Firebase / Functions 呼び出し
functions/
  index.js       LiveKit トークン発行などの Cloud Functions
mobile/          モバイル関連の補助コード
```

## Notes

- MediaPipe のポーズ検出と背景透過は別々に毎フレーム実行しているため、端末性能によっては重くなります。
- 負荷対策として、共有カメラ、GPU delegate、lite モデル、1人検出制限を使っています。
- Wii Balance Board はブラウザと OS の組み合わせによって認識挙動が変わる場合があります。

## Scripts

ルート:

- `npm run dev`
- `npm run build`
- `npm run preview`

`functions`:

- `npm run serve`
- `npm run deploy`
