module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      {
        root: ['./'],
        alias: {
          '@': './src'
          '@utils': './src/utils',
          '@components': './src/components',
          '@ui': './src/components/ui'
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
      'react-native-reanimated/plugin',
    ],
  };
};
