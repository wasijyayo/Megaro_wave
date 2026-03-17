module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      safe: true,         // .env.example が存在する場合に必須キーを強制チェック
      allowUndefined: false,
    }],
  ],
}
