const http = require('http')
//to create web server=> we need http module that has create server method 

const server = http.createServer((req,res)=>{
    //careful for the order of the parameter it is important
    if(req.url ==='/'){
        res.end('whats up bruv')
    }
    else if(req.url === '/about'){
        res.end('here is out story!')
    }
    else{
        res.end('oops wrong page man')
    }
    
})

server.listen(5000)
/*notes:
- i tried to run the program with res.write inside req.url and the page was not loading
- 

*/