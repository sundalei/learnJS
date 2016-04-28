/*
var now = new Date();
alert(now);
alert(now.getFullYear());
alert(now.getMonth()); 
alert(now.getDate()); 
alert(now.getDay()); 
alert(now.getHours()); 
alert(now.getMinutes()); 
alert(now.getSeconds()); 
alert(now.getMilliseconds()); 
alert(now.getTime()); 
*/

/*
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
alert(d);
*/

/*
var d = Date.parse('2015-06-24T19:49:22.875+08:00');
var date = new Date(d);
alert(date);
*/

/*
var d = new Date();
alert(d.toLocaleString());
alert(d.toUTCString());
*/

if (Date.now) {
    alert(Date.now()); // 老版本IE没有now()方法
} else {
    alert(new Date().getTime());
}