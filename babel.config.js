module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],       // 设置根目录为 src
      alias: {
        '@': './src',        // 别名 @ 映射到 src
        // 可按需添加子路径 alias
        // '@components': './src/components',
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    }],
    ['module:react-native-dotenv', {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }],
    'react-native-reanimated/plugin',
  ],
};
