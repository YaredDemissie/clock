const http = require('http');
const fs = require('fs');
const PORT = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.writeHead('Error: File Not Found');
        } else {
            res.write(data);
        }
        res.end();
    })
})

server.listen(PORT, function (error) {
    if (error) {
        console.log("Error: ", error);
    } else {
        console.log("Listening on port " + PORT)
    }
})