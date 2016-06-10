'use strict';

var fs = require('fs');

var data = 'Hello, nodejs';
fs.writeFileSync('output.txt', data);
