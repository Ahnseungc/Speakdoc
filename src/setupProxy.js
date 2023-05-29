const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/process_image',
    createProxyMiddleware({
      target: 'https://c620-1-212-189-109.ngrok-free.app',
      changeOrigin: true,
    })
  );
};