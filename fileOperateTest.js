function checkForm() {
    var f = document.getElementById('test-image-file');
    var filename = f.value;
    alert(filename);
    
    if(!filename || !(filename.endsWith('jpg') || filename.endsWith('png') || filename.endsWith('gif'))) {
        alert('Can only upload image file.');
        return false;
    }
}