var fs = require('fs');

//blocking code
// var data = fs.readFileSync('file.txt');
// console.log(data.toString());
// console.log('program ended')
// non blocking or async

var data = fs.readFile('file.txt', function(err, data){
  if(err) {
    console.log(err)
  }
  else {
    console.log(data.toString());
  }
})
console.log('program ended')
