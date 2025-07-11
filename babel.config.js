module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@assets': './assets',
            '@components': './src/components',
            '@ui': './src/components/ui',
            '@icons': './src/components/icons',
            '@api': './src/api',
            '@config': './src/config',
            '@types': './src/types',
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
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
