import development from './development';
import { Configuration } from 'webpack-dev-server';
import { resolve } from 'path';

const devServer: Configuration = {
  contentBase: resolve(__dirname, '..', 'public'),
  compress: true,
  port: 8080,
  proxy: {
    "/api": {
      target: "http://127.0.0.1:9502",
      pathRewrite: {"^/api" : ""}
    }
  }
};

export default {
  ...development,
  devServer
};
