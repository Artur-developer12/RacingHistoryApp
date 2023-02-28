module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          store: './src/store',
          screens: './src/screens',
          routes: './src/routes',
          components: './src/components',
          assets: './src/assets',
        },
      },
    ],
  ],
};
