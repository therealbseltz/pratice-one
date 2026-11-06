const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server instance
const proxy = httpProxy.createProxyServer({});

// Create a basic HTTP server that routes traffic
const server = http.createServer((req, res) => {
  // Replace with your target destination or dynamic routing logic
  const target = 'https://api.github.com'; 

  console.log(`Proxying request to: ${target}${req.url}`);
  proxy.web(req, res, { target: target, changeOrigin: true });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
