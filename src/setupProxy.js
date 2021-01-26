const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://gateway.marvel.com:443/v1/public/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
