// var response = require('D:/VSCODE/MyWebApp/NodeJS1/method.js');
var fs = require('fs');
var readme = fs.readFileSync('D:/VSCODE/MyWebApp/NodeJS1/demo.txt','utf-8');
var getdb = readme.split(',')
console.log(getdb[0]);
// fs.readFile('demo.txt', function (err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });


// console.log(response.pi);
// console.log(response.add(10,2));
// console.log(response.update());

