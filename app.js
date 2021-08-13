const http = require('http');
const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('my test node app111');
});

server.listen(port, hostname, () => {
    console.log('run at http://%s:%s/', hostname, port);
});

process.on('SIGINT', () => {
    console.log('exit');
    process.exit();
});
