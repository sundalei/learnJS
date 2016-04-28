'use strict';

window.onload = function() {
    var js = document.getElementById('test-p');
    var arr = document.getElementsByClassName('c-red c-green')[0].getElementsByTagName('p');
    var haskell = document.getElementsByClassName('c-green')[1].lastElementChild;
    
    if (!js || js.innerHTML !== 'JavaScript') {
    alert('Failed to select JavaScript!');
} else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerHTML !== 'Python' || arr[1].innerHTML !== 'Ruby' || arr[2].innerHTML !== 'Swift') {
    alert('Failed to select Python,Ruby,Swift!');
} else if (!haskell || haskell.innerHTML !== 'Haskell') {
    alert('Failed to select Haskell!');
} else {
    alert('Pass!');
}
}