var http = require('http');

function parseCookies(req) {
  var list = {},
      rc = req.headers.cookie;

  rc && rc.split(',').forEach(function (cookie) {
    var parts = cookie.split('=');
    list[parts[0]] = parts[1];
  });

  return list;
}

http.createServer(function (req, res) {
  //To Read a cookie
  var cookies = parseCookies(req);
  console.log(cookies);

  // To Write a cookie
  res.writeHead(200, {
    'Set-Cookie' : 'mycookie=test, welcome=test, hello=test;httpOnly=true',
    'Content-Type' : 'text/plain'
  });

  res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');
