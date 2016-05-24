function doSubmitForm() {
  var form = document.getElementById('test-form');
  var input = form.getElementsByTagName('input')[0];
  input.name = 'helloworld';
  form.submit();
}

function checkForm() {
    var pwd = document.getElementById('password');
    pwd.value = toMD5(pwd.value);
    alert(pwd.value);
    return true;
}
