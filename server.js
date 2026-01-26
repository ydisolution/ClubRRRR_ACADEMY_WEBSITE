const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const BASE_DIR = __dirname;

const server = http.createServer((req, res) => {
  let filePath = path.join(BASE_DIR, req.url);
  
  // Handle directory requests
  if (req.url === '/' || req.url === '') {
    filePath = path.join(BASE_DIR, 'web_PM__index.html');
  }
  
  // Default to .html if no extension
  if (!path.extname(filePath)) {
    filePath += '.html';
  }
  
  // Security: prevent directory traversal
  if (!filePath.startsWith(BASE_DIR)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }
  
  // Read and serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }
    
    // Set content type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.ttf': 'font/ttf'
    };
    
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);
    res.statusCode = 200;
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Server running at: http://localhost:${PORT}`);
  console.log(`📂 Serving files from: ${BASE_DIR}`);
  console.log(`\n✅ Open your browser and go to: http://localhost:${PORT}`);
  console.log(`\n⏹️  To stop the server, press Ctrl+C\n`);
});
