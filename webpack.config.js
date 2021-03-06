const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV: mode } = process.env
const template = (type) => {
  const cdn = `<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/locale/zh-cn.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/react/16.4.2/umd/react.production.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.2/umd/react-dom.production.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/antd/3.9.1/antd.min.js"></script>
  <script src="//unpkg.com/@fratercula/puffin"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
  `

  return `<!doctype html>
<html>
<head>
  <title> Antd Puffin </title>
  <meta charset="utf-8" />
  <link href="//cdnjs.cloudflare.com/ajax/libs/antd/3.9.1/antd.min.css" rel="stylesheet" />
  <link rel='stylesheet' href='//highlightjs.org/static/demo/styles/github.css'/>
</head>
<body style="width: 100vw; height: 100vh;">
  <div style="height: 100%;" id="root"></div>
${type === 'demo' ? cdn : ''}
</body>
</html>
  `
}

const base = {
  mode: 'development',

  entry: './entry/index.js',

  output: { filename: 'index.js' },

  resolve: { extensions: ['.js'] },

  devServer: {
    disableHostCheck: true,
    contentBase: './entry',
    port: 8000,
    host: '0.0.0.0',
    stats: 'minimal',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },

  devtool: 'cheap-module-eval-source-map',
}

if (mode === 'umd' || mode === 'demo') {
  base.mode = 'production'
}

if (mode === 'umd' || mode === 'commonjs') {
  base.entry = './src/index.js'
}

if (mode === 'demo') {
  base.output = {
    filename: 'index.[chunkhash:8].js',
    path: `${__dirname}/docs`,
  }
}

if (mode === 'umd') {
  base.output = {
    library: 'antdPuffin',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: `${__dirname}/dist`,
  }
}

if (mode === 'commonjs') {
  base.output = {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    path: `${__dirname}/lib`,
  }
}

if (mode === 'umd' || mode === 'demo') {
  base.devtool = 'source-map'
}

if (mode === 'commonjs') {
  base.devtool = false
}

if (mode === 'demo') {
  base.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
    'highlight.js': 'hljs',
    '@fratercula/puffin': 'puffin',
  }
}

if (mode === 'umd') {
  base.externals = {
    react: 'React',
    antd: 'antd',
    '@fratercula/puffin': 'puffin',
  }
}

if (mode === 'commonjs') {
  base.externals = {
    react: 'commonjs react',
    antd: 'commonjs antd',
    '@fratercula/puffin': 'commonjs @fratercula/puffin',
  }
}

if (mode === 'dev') {
  base.plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      templateContent: template(mode),
    }),
  ]
}

if (mode === 'demo') {
  base.plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      templateContent: template(mode),
      minify: {
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        collapseWhitespace: true,
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
}

module.exports = base
