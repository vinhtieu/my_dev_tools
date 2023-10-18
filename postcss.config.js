module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'css-loader' },
      { test: /\.svg$/, loader: 'file-loader' }
    ]
  }
}
