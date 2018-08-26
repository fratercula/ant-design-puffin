const { NODE_ENV: mode } = process.env

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
    ],
  },

  devtool: 'cheap-module-eval-source-map',
}

if (mode === 'umd' || mode === 'demo') {
  base.mode = 'production'
}

if (mode === 'umd' || mode === 'commonjs') {
  base.entry = './src'
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

if (mode === 'demo' || mode === 'umd') {
  base.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
    '@fratercula/puffin': 'puffin',
  }
}

if (mode === 'commonjs') {
  base.externals = {
    react: 'commonjs react',
    'react-dom': 'commonjs reactDom',
    antd: 'commonjs antd',
    '@fratercula/puffin': 'commonjs @fratercula/puffin',
  }
}

module.exports = base
