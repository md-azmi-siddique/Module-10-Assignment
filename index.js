const http = require("http");
const fs = require("fs");
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

http.createServer((req, res) => {
    if (req.url === "/") {
      res.end("This is Home Page");
    } 
    else if (req.url === "/contact") {
      res.end("This is Contact Page");
    }
    else if (req.url === "/about") {
      res.end("This is About Page");
    }
    else if (req.url === "/file-write") {
        fs.writeFile('demo.txt', 'hello world', (error) => {
            if (error) {
                console.error('Error writing file:', error);
                res.statusCode = 404;
                res.end('File Write Fail');
            }
            else {
                console.log('File written successfully');
                res.end('success');
            }
        });
    }
    else if(req.url === '/upload'){
        fs.readFile("index.html", "utf-8", (error, data)=>{
            res.write(data);
            res.end();
        })
    }
    else if(req.url === '/fileUpload'){
        upload.single('uFile')(req, res, (err) => {
            if (err) {
                res.statusCode=404
                res.write('Error uploading file');
            } else {
                res.write('File uploaded successfully');
            }
            res.end();
        });
    }
    else {
        // res.Status(500)
        res.statusCode = 404;
        res.end("Wrong Url Parameter")
    }
  })
  .listen(5500, () => {
    console.log("Server Running at port 5500....");
  });
