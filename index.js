var url = require("url");
var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname + ".html";
    if (q.pathname === "/") {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      console.log(filename);
      fs.readFile(filename, function (err, data) {
        if (err) {
          fs.readFile("404.html", function (err, data) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          });
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    }
  })
  .listen(8080);
