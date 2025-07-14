const http=require("http");

const myServer=http.createServer((req,res)=>{
    console.log("Server is running on port 7000");
    console.log(req.url)
    res.end("Response send")
})

myServer.listen(7000);