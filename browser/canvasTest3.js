var perform = function() {
    window.loadStockData = function(r) {
        var NUMS = 30;
        var data = r.data;
        if (data.length > NUMS) {
            data = data.slice(data.length - NUMS);
        }
        data = data.map(function(x) {
            return {
                date: x[0],
                open: x[1],
                close: x[2],
                high: x[3],
                low: x[4],
                vol: x[5],
                change: x[6]
            };
        });
        window.drawStock(data);
    }

    window.drawStock = function(data) {

        var canvas = document.getElementById('stock-canvas');
        var width = canvas.width;
        var height = canvas.height;
        var ctx = canvas.getContext('2d');

        alert(JSON.stringify(data[0]));

        ctx.clearRect(0, 0, width, height);
        //ctx.fillText('Test Canvas', 10, 10);

        var wcell = width / 30, low = data[0].low, high = data[0].high, ratio, i;
        for (i = 0; i < 30; i++) {
            low = Math.min(low, data[i].low);
            high = Math.max(high, data[i].high);
        }
        ratio = (high - low) / height;
        for (i = 0; i < 30; i++) {
            if (data[i].close > data[i].open) {
                ctx.fillStyle = '#FF0000';
                ctx.fillRect(i * wcell + wcell * (1 / 2 - 1 / 16), (high - data[i].high) / ratio, wcell / 8, (data[i].high - data[i].close) / ratio);
                ctx.fillRect(i * wcell, (high - data[i].close) / ratio, wcell, (data[i].close - data[i].open) / ratio);
                ctx.fillRect(i * wcell + wcell * (1 / 2 - 1 / 16), (high - data[i].open) / ratio, wcell / 8, (data[i].open - data[i].low) / ratio);
            }
            else {
                ctx.fillStyle = '#00BB00';
                ctx.fillRect(i * wcell + wcell * (1 / 2 - 1 / 16), (high - data[i].high) / ratio, wcell / 8, (data[i].high - data[i].open) / ratio);
                ctx.fillRect(i * wcell, (high - data[i].open) / ratio, wcell, (data[i].open - data[i].close) / ratio);
                ctx.fillRect(i * wcell + wcell * (1 / 2 - 1 / 16), (high - data[i].close) / ratio, wcell / 8, (data[i].close - data[i].low) / ratio);
            }
        }
    }

    var js = document.createElement('script');
    js.src = 'http://img1.money.126.net/data/hs/kline/day/history/2015/0000001.json?callback=loadStockData&t=' + Date.now();
    document.getElementsByTagName('head')[0].appendChild(js);
}