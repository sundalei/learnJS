var now = new Date();
now;
now.getFullYear();
now.getMonth();
now.getDate();
now.getDay();
now.getHours();
now.getMinutes();
now.getSeconds();
now.getMilliseconds();
now.getTime();

var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d;

var d = Date.parse('2015-06-24T19:49:22.875+08:00');
d;
var date = new Date(d);
date;


var d = new Date();
d.toLocaleString();
d.toUTCString();

if (Date.now) {
  alert('Date.now');
  alert(Date.now()); // 老版本IE没有now()方法
} else {
  alert('Date.getTime');
  alert(new Date().getTime());
}
