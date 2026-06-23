const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8080;
const s = http.createServer((r, rs) => {
  let u = r.url.split('?')[0] || '/';
  if (u === '/') u = '/index.html';
  const f = path.join(__dirname, u);
  fs.readFile(f, (e, d) => {
    if (e) { rs.writeHead(404); rs.end('Not found'); }
    else { rs.writeHead(200); rs.end(d); }
  });
});
s.listen(PORT, '0.0.0.0');
console.log('Server on ' + PORT);
