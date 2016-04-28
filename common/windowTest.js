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
    var drinks = document.getElementsByTagName('dt');
    var i, s;
    s = 'Provided drinks are: ';
    for(i = 0; i < drinks.length; i++) {
        s = s + drinks[i].innerHTML + ',';
    }
    //alert(s);
    //alert(document.cookie.length);
    alert(history.back());
    alert(history.forward());
}