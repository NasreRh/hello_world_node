const http = require("http"),
      {readFileSync} = require("fs"),
      txt = readFileSync("test.txt","utf8");

const server = http.createServer((req,res)=>{
    res.write(txt)
    res.end()
})
server.listen(5000)
