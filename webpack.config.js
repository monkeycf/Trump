// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './example/src/index.html'),
  filename: './index.html',
});

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './example/src/core/index.ts'),
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
      },
    ],
  },
  //映射工具
  devtool: 'source-map',
  //处理路径解析
  resolve: {
    //extensions 拓展名
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
    port: 3005,
  },
};
