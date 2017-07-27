let http = require("http");
const PORT = 8080;

//req is request
//res is response
let server = http.createServer((req, res) => {
    if(req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        if(req.url === "/") {
            res.write("<h1>This would be my index.html</h1>");
        } else if(req.url === "/blog") {
            res.write("<h1>This would be my blog.html</h1>");
        }
        res.end();
    }
});

server.listen(PORT);