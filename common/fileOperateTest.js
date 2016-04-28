window.onload = function() {
    var fileInput = document.getElementById('test-image-file');
    var info = document.getElementById('test-file-info');
    var preview = document.getElementById('test-image-preview');
    
    fileInput.addEventListener('change', function() {
        preview.style.backgroundImage = '';
        
        if(!fileInput.value) {
            info.innerHTML = 'No File Selected.';
            return;
        }
        
        var file = fileInput.files[0];
        info.innerHTML = 'file: ' + file.name + '<br>' +
                     'size: ' + file.size + '<br>' +
                     'update: ' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('No valid image file!');
        return;
    }
    
     var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;// data:image/jpeg;base64,
            alert(data);
            preview.style.backgroundImage = 'url("'+data+'")';
        }
        
        reader.readAsDataURL(file);
    });
}