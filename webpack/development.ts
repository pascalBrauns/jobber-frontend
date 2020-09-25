import { Configuration } from 'webpack';
import common from './common';

const configuration: Configuration = {
  ...common,
  mode: 'development',
  devtool: '@cheap-module-eval-source-map'
}

export default configuration;
