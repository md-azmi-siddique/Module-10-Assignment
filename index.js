const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.end("This is Home Page");
    } 
    else if (req.url == "/contact") {
      res.end("This is Contact Page");
    }
    else if (req.url == "/about") {
      res.end("This is About Page");
    }
    else if (req.url == "/file-write") {
        fs.writeFile('demo.txt', 'hello world', (error) => {
            if (error) {
                console.error('Error writing file:', error);
                res.end('Failed');
            }
            else {
                console.log('File written successfully');
                res.end('success');
            }
        });
    }
  })
  .listen(5500, () => {
    console.log("Server Running at port 5500....");
  });
