// 拿到待删除节点：
var self = document.getElementById('to-be-removed');
// 拿到父节点：
var parent = self.parentElement;
// 删除：
var removed = parent.removeChild(self);
removed === self; // true

