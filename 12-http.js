//get the built-in module
const http =require('http');

//make a server, it will keep running
//req--incoming request, response--stuff sending back
const server =http.createServer((req, res)=>{
    //homepage
    if(req.url==='/'){
        res.write('Welcome to our home page');
        res.end();
    }
    //about page
    else if(req.url === '/about'){
        res.end('Here is our short history');
    }
    else{
        res.end(`
    <h1>Oops!</h1>
    <p>we can't find the page 404</p>
    <a href="/">back home</a>
    `);
    }
})

//port to listen to
server.listen(5000);