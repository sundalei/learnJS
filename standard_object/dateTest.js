var now = new Date();
now; // Wed Jul 27 2016 19:38:40 GMT+0800 (CST)
now.getFullYear(); // 2016, 年份
now.getMonth(); // 6, 月份，注意月份范围是0~11，6表示七月
now.getDate(); // 27, 表示27号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 38, 分钟
now.getSeconds(); // 40, 秒
now.getMilliseconds(); // 168, 毫秒数
now.getTime(); // 1469619520168, 以number形式表示的时间戳

var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

var d = Date.parse('2015-06-24T19:49:22.875+08:00');
d; // 1435146562875
var date = new Date(d);
date; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)


var d = new Date();
d.toLocaleString(); // '2016/7/27 下午8:39:50'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
d.toUTCString(); // 'Wed, 27 Jul 2016 12:39:50 GMT', UTC时间，与本地时间相差8小时

if (Date.now) {
  alert('Date.now');
  alert(Date.now()); // 老版本IE没有now()方法
} else {
  alert('Date.getTime');
  alert(new Date().getTime());
}
