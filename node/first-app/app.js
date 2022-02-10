const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1>Hello world</h1>');
    res.end();
  }

  if (req.url === '/list') {
    res.write(JSON.stringify(http, null, ' '));
    res.end();
  }
});

server.on('connection', (socket) => {
  console.log('New connection from ', socket.localAddress);
});

server.listen(3000);
console.log('Listening on port 3000...');


// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//   console.log('Listener called ', arg);
// });

// logger.log('message');


// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // register a listener
// emitter.on('messageLogged', (arg) => {
//   console.log('Listener called', arg);
// });

// // Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://etc.com'});



// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files) {
//   if (err) console.log('Error: ', err);
//   else console.log(files);
// });

// fs.readdir('./', (err, files) => {
//   if (err) console.log('Error: ', err);
//   else console.log(files);
// });

// // const path = require('path');
// const os = require('os');

// // var pathObject = path.parse(__filename);

// // console.log(__filename);
// // console.log(pathObject);

// var totalMem = os.totalmem();
// var freeMem = os.freemem();

// // Template string
// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);