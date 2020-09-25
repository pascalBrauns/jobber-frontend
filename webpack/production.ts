import { Configuration } from 'webpack';
import common from './common';

const configuration: Configuration = {
  ...common,
  mode: 'production',
}

export default configuration;
