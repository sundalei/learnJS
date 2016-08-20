'use strict'

alert('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
alert('window outer size: ' + window.outerWidth + ' x ' + window.outerHeight);

alert('app Name = ' + navigator.appName + '\n' +
      'app Version = ' + navigator.appVersion + '\n' +
      'language = ' + navigator.language + '\n' +
      'platform = ' + navigator.platform + '\n' +
      'userAgent = ' + navigator.userAgent);

alert('Screen size = ' + screen.width + ' x ' + screen.height);
alert('Screen color depth = ' + screen.colorDepth);

/*****************************************************************************/

// http://localhost:3000/item/3
location.protocol;
location.host;
location.port;
location.pathname;
location.search;
location.hash;

if(confirm('reload current page ' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/');
}

/*****************************************************************************/

alert(document.title);
document.title = '努力学习JavaScript!';

var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');

var i, s, menu, drinks;

menu = document.getElementById('drink-menu');
menu.tagName;

drinks = document.getElementsByTagName('dt');
s = '提供的饮料有:';
for(i = 0; i < drinks.length; i++) {
  s = s + drinks[i].innerHTML + ',';
}
alert(s);
