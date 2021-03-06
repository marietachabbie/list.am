var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Marieta!');
}).listen(8080);


const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const generateID = function(){
    let res = '';
    for(let i = 0; i < 8; i++){
        let j = getRandomInt(0, 36);
        res += chars[j];
    };
    return res;
}
