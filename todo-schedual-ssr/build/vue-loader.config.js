const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:7]',
      camelCase: true
    },
/*     hotReload: false //根据环境变量生成
    loaders: {
      'docs': docsLoader
    },
    preLoader: {},
    postLoader: {} */
  }
}