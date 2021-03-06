const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send HTTP req.
    console.log(message);

    this.emit('messageLogged', { msg: message });
  }
}

module.exports = Logger;