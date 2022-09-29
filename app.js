const http = require('http')
//to create web server=> we need http module that has create server method 
const server = http.createServer((req,res)=>{//careful for the order of the parameter it is important
    res.write('whats up bruv')
    res.end()
})

server.listen(5000)