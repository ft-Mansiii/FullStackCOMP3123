const http = require('http');

const SERVER_PORT = 3000;
const SERVER_HOST = 'localhost'; // 127.0.0.1

// console.log(http)
const server = http.createServer((req, res) => {
     console.log(req)
    console.log(res)
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});