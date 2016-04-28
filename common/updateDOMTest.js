'use strict';

window.onload = function () {
    var js = document.getElementById('test-js');
    js.innerText = 'JavaScript';
    //p.innerHTML = 'ABC<span style="color: red">RED</span>XYZ'
    //p.innerText = '<script>alert("HI")</script>';
    js.style.color = '#ff0000';
    js.style.fontSize = '20px';
    js.style.paddingTop = '2em';
    js.style.fontWeight = 'bold';
    
    if (js && js.parentNode && js.parentNode.id === 'test-div' && js.id === 'test-js') {
    if (js.innerText === 'JavaScript') {
        if (js.style && js.style.fontWeight === 'bold' && (js.style.color === 'red' || js.style.color === '#ff0000' || js.style.color === '#f00' || js.style.color === 'rgb(255, 0, 0)')) {
            alert('Passed!');
        } else {
            alert('CSS样式测试失败!');
        }
    } else {
        alert('文本测试失败!');
    }
} else {
    alert('节点测试失败!');
}
}