const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

// Initialize an event object with the new structure
let event = { id: '', title: '', detail: '', date: '' };

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});