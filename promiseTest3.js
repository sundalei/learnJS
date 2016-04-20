var perform = function() {
    
    function ajax(method, url, data) {
        var request = new XMLHttpRequest();
        return new Promise(function(resolve, reject) {
            request.onreadystatechange = function() {
                if(request.readyState === 4) {
                    if(request.status === 200) {
                        resolve(request.responseText);
                    } else {
                        reject(request.status);
                    }
                }
            }
            request.open(method, url);
            request.send(data);
        });
    }
    
    var log = document.getElementById('test-promise-ajax-result');
    var p = ajax('GET', '/api/categories');
    p.then(function(text) {
        log.innerText = text;
    }).catch(function(status) {
        log.innerText = 'ERROR: ' + status;
    });
}