var events = require('events');

var eventEmitter = new events.EventEmitter();

var completeHandler = function () {
  console.log("task completed");
}
eventEmitter.on('completion', completeHandler)

for(var i=0;i< 10; i++) {
  console.log('count:', i);
  if(i == 5) {
    eventEmitter.emit('completion');
  }
}
