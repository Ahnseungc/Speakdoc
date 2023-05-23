const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/document',
    createProxyMiddleware({
      target: 'https://21cf-112-167-62-38.ngrok-free.app',
      changeOrigin: true,
    })
  );
};