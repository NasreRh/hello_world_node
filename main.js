const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("hi it's me node js and i am working just fine ")
    res.end()
})
server.listen(5000)