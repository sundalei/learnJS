window.onload = function() {
    /*
    var js = document.getElementById('js');
    var list = document.getElementById('list');
    list.appendChild(js);
    var haskell = document.createElement('p');
    haskell.id = 'haskell';
    haskell.innerText = 'Haskell';
    list.appendChild(haskell);
    
    var d = document.createElement('style');
    d.setAttribute('type', 'text/css');
    d.innerHTML = 'p {color: red}';
    document.getElementsByTagName('head')[0].appendChild(d);
    */
    
    /*
    var list = document.getElementById('list');
    var ref = document.getElementById('python');
    var haskell = document.createElement('p');
    haskell.id = 'haskell';
    haskell.innerText = 'Haskell';
    list.insertBefore(haskell, ref);
    
    for(var i = 0; i < list.children.length; i++) {
        var child = list.children[i];
        alert(child.innerText);
    }*/
    
    var list = document.getElementById('test-list');
    var children = list.getElementsByClassName('lang');
    var arr = [];
    var i;
    for(i = 0; i < children.length; i++) {
        arr.push(children[i].innerHTML);
    }
    arr.sort();
    for(i = 0; i < arr.length; i++) {
        children[i].innerHTML = arr[i];
    }
    
    (function () {
    var
        arr, i,
        t = document.getElementById('test-list');
    if (t && t.children && t.children.length === 5) {
        arr = [];
        for (i=0; i<t.children.length; i++) {
            arr.push(t.children[i].innerText);
        }
        if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
            alert('Passed!');
        }
        else {
            alert('Failed: ' + arr.toString());
        }
    }
    else {
        alert('Failed!');
    }
})();
}