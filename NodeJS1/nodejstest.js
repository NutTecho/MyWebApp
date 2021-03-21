//===========get data from other file===========
// var response = require('./method.js');
// console.log(response.pi);
// console.log(response.add(10,2));
// console.log(response.update());
//==========================================

//======read ,write file================
// var fs = require('fs');
// var readme = fs.readFileSync('./demo.txt','utf-8');
// var getdb = readme.split(',')
// console.log(getdb);


// fs.mkdir('project',function() {
//     fs.writeFileSync('./project/hellojs.txt',readme)
// });
//======================================

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (request, response) {
//     if(request.url === '/home' || request.url === '/')
//     {
//        response.writeHead(200, {'Content-Type': 'text/html'});
//        var mystream = fs.createReadStream(__dirname +"/"+ "index.html","utf-8")
//     //    response.end('Hello World123');  
//        mystream.pipe(response)
//     }
//     else if(request.url === '/page1' || request.url === '/')
//     {
//        response.writeHead(200, {'Content-Type': 'text/html'});
//        var mystream = fs.createReadStream(__dirname + "/"+ "page1.html","utf-8")
//     //    response.end('Hello World123');  
//        mystream.pipe(response)
//     }
//     else if(request.url === '/page2' || request.url === '/')
//     {
//        response.writeHead(200, {'Content-Type': 'text/html'});
//        var mystream = fs.createReadStream(__dirname + "/"+ "page2.html","utf-8")
//     //    response.end('Hello World123');  
//        mystream.pipe(response)
//     }
//     else
//     {
//        response.writeHead(404, {'Content-Type': 'text/html'});
//        var mystream = fs.createReadStream(__dirname + "/"+ "notfound.html","utf-8")
//     //    response.end('Hello World123');  
//        mystream.pipe(response)
//     }
 
// }).listen(8081,'127.0.0.1');


const express = require('express');
const app = express();

app.get('/',function(req, res)
{
    res.send("<h1> Hello This is Main Page</h1>");
});
app.use('/profile/:name',function(req,res,next)
{
    res.send("<h1>" +  new Date().toString() + req.method + req.url +  "</h1>");
});
app.get('/profile/:name',function(req, res)
{
    res.send("<h1> Hello friend :  " +  req.params.name + "</h1>");
});
app.listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

// var buf = new Buffer("thailand");
// var buf1 = buf.toJSON(buf)
// console.log(buf1);


// var fs = require('fs');
// const { readSync, ReadStream } = require('node:fs');
// var readstm = fs.createReadStream('./demo.txt','utf-8');
// readStream.setEncoding('utf8');
// ReadStream.on('data',function(txt) {
//     data += txt;
// })
// readStream.on('end',function() {
//     console.log(data);
// })
