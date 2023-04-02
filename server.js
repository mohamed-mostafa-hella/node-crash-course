const http = require('http');
const fs = require('fs');
const _ = require('lodash');


// we store sever in a variable becouse we can need it to use in a web socket
const server = http.createServer( (req, res)=>{
    // console.log('request made');
    // console.log(req.url , req.method);


    // Lodash
    const num = _.random(0, 20); // return random number from 0 to 20
    console.log(num);

    // once function make the function just run one 
    // time not any more even if you call it more than one time
    const greet = _.once(()=>{ 
        console.log('Hello');
    });
    greet();
    greet();

    
//set header content type

    // Send A plan text
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('hello, mohamed mostafa.')

    // Send A html text
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<head><link rel="stylesheet" href= "#"></head>')
    // res.write('<p>hello, mohamed mostafa from paragraph.</p>')
    // res.write('<p>hello, again mohamed mostafa from paragraph.</p>')
    // res.end();

    // Send A html file (simle routing system)
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.error(err);
            res.end();
        }else {
            res.end(data);
        }  
    })


}); 

server.listen(3000, 'localhost', ()=>{
    console.log('listening for requestes on post 3000');
});