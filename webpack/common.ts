import { resolve } from 'path';
import { Configuration } from 'webpack';
import WebpackNotifierPlugin = require('webpack-notifier');
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

const configuration: Configuration = {
  context: resolve(__dirname, '..', 'src'),
  entry: './index.tsx',
  target: 'web',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '..', 'public')
  },
  module: {
    rules: [
      {
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          },
        }
      }
    ]
  },
  resolve: {
    alias: {
      Component: resolve(__dirname, '..', 'src', 'Component'),
      Mock: resolve(__dirname, '..', 'src', 'Mock'),
      Utility: resolve(__dirname, '..', 'src', 'Utility'),
      Type: resolve(__dirname, '..', 'src', 'Type'),
      Store: resolve(__dirname, '..', 'src', 'Store'),
      Constant: resolve(__dirname, '..', 'src', 'Constant'),
      Api: resolve(__dirname, '..', 'src', 'Api')
    },
    extensions: ['.ts', '.tsx', '.json', '.js']
  },
  plugins: [
    new WebpackNotifierPlugin,
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve(__dirname, '..', 'tsconfig.json')
      }
    }),
    new ForkTsCheckerNotifierWebpackPlugin({ title: 'Webpack' })
  ]
}

export default configuration;
