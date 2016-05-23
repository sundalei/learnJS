var js = document.getElementById('js');
var list = document.getElementById('list');
list.appendChild(js);

/******************************************************************************/
var list = document.getElementById('list');
var haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);

/******************************************************************************/
var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p {color: red}';
document.getElementsByTagName('head')[0].appendChild(d);

/******************************************************************************/
var list = document.getElementById('list');
var ref = document.getElementById('python');
var haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);

/******************************************************************************/
var list = document.getElementById('list');
for(var i = 0; i < list.children.length; i++) {
  var child = list.children[i];
  console.log(child.innerText);
}
