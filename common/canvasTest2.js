var perform = function () {
    var canvas = document.getElementById('test-text-canvas');
    var ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = "#666666";
    ctx.font = '24px Arial';
    ctx.fillStyle = '#333333';
    ctx.fillText('Words with shadows', 40, 80);
}