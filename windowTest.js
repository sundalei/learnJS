'use strict'

//alert('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);

/*
alert('app Name = ' + navigator.appName + '\n' +
      'app Version = ' + navigator.appVersion + '\n' + 
      'language = ' + navigator.language + '\n' +
      'platform = ' + navigator.platform + '\n' +
      'userAgent = ' + navigator.userAgent);
      */

//alert('Screen size = ' + screen.width + ' x ' + screen.height);

/*
if(confirm('reload current page ' + location.href + '?')) {
    location.reload();
} else {
    location.assign('http://www.baidu.com');
}
*/

//alert(document.title);
//document.title = 'learn javascript with best effort';

window.onload = function() {
    var menu = document.getElementById('drink-menu');
    alert(menu);
}