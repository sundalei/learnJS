window.onload = function() {
    var arr = ['HTML', 'CSS', 'JavaScript'];
    var parent = document.getElementById('test-list');
    
    for(var id = parent.children.length - 1; id >= 0; id--) {
        if(arr.indexOf(parent.children[id].innerText) === -1) {
            parent.removeChild(parent.children[id]);
        }
    }
}

