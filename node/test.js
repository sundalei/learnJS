'use strict';

process.nextTick(function() {
  console.log('nextTick callback');
  if(typeof(global) === 'undefined') {
    console.log('browser');
  } else {
    console.log(typeof(global) + ' node.js');
  }
});
process.on('exit', function(code) {
  console.log('about to exit with code: ' + code);
});
console.log('nextTick was set');
console.log('nextTick was set');
