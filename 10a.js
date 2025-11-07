const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Client requested:', req.url);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello! This is a Node.js server.');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});