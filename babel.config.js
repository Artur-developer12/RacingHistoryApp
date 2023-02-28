module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        alias: {
          store: './src/store',
          config: './src/config',
          screens: './src/screens',
          routes: './src/routes',
          components: './src/components',
          assets: './src/assets',
          lib: './src/lib',
        },
      },
    ],
  ],
};
