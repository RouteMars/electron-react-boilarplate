import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';

import { plugins } from './webpack.plugins';
import { rules } from './webpack.rules';

export const mainConfig: Configuration = {
  // target: 'electron-main',
  entry: './src/main/index.ts',
  module: { rules },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    plugins: [new TsconfigPathsPlugin()],
    // fallback: {
    //   fs: false,
    //   process: false,
    //   path: false,
    //   assert: false,
    //   os: false,
    //   util: false,
    //   // path: require.resolve('path-browserify'),
    // },
  },
};
