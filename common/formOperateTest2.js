function checkForm() {
    var pwd = document.getElementById('password');
    pwd.value = toMD5(pwd.value);
    alert(pwd.value);
    return true;
}