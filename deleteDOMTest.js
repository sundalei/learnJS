window.onload = function () {
    /*
    var self = document.getElementById('java');
    var parent = self.parentElement;
    var removed = parent.removeChild(self);
    
    alert(removed === self);
    */
    
    /*
    var parent = document.getElementById('list');
    alert(parent.removeChild(parent.children[0]));
    alert(parent.removeChild(parent.children[1]));
    */
    
    var arr = ['HTML', 'CSS', 'JavaScript'];
    var parent = document.getElementById('test-list');
    for(var id = parent.children.length - 1; id >= 0; id--) {
        if(arr.indexOf(parent.children[id].innerText) === -1) {
            parent.removeChild(parent.children[id]);
        }
    }
}