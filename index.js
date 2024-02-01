const { error } = require("console");
const fs = require("fs");
const http  =  require("http");

http.createServer((req,res)=>{
    if(req.url == '/'){
        // fs.readFile("home.html", "utf-8", (error, data)=>{
        //     res.write(data);
        //     res.end();
        // })
        res.end("This is Home Page")

    }else if(req.url == '/contact'){
        // fs.readFile("contact.html", "utf-8", (error, data)=>{
        //     res.write(data);
        //     res.end();
        // })
        res.end("This is Contact Page")
    }else if(req.url == '/about'){
        // fs.readFile("about.html", "utf-8", (error, data)=>{
        //     res.write(data);
        //     res.end();
        // })
        res.end("This is About Page")
    }

}).listen(5500,()=>{
    console.log("Server Running at port 5500....");
})