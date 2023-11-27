import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';

import { plugins } from './webpack.plugins';
import { rules } from './webpack.rules';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  // target: 'electron-renderer',
  module: { rules },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
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
