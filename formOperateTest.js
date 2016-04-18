window.onload = function() {
    var input = document.getElementById('email');
    var mon = document.getElementById('monday');
    var tue = document.getElementById('tuesday');
    
    var value = input.value;
    alert(value);
    input.value = 'sun_dalei@hotmail.com';
    
    alert(mon.value + ' : ' + mon.checked);
    alert(tue.value + ' : ' + tue.checked);
    
    mon.checked = true;
    tue.checked = false;
} 