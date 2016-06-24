var age = 20;
if (age >= 18) {
  // 如果age >= 18为true，则执行if语句块
  alert('adult');
} else {
  // 否则执行else语句块
  alert('teenager');
}

/*******************************************************************************/
var age = 15;

if(age >= 18) {
    alert("adult");
} else {
    console.log("age < 18");
    alert('teenager');
}

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));

var bmi = weight / (height * height);
if(bmi < 18.5) {
  alert('过轻');
} else if(bmi < 25) {
  alert('正常');
} else if(bmi < 28) {
  alert('过重');
} else if(bmi < 32) {
  alert('肥胖');
} else {
  alert('严重肥胖');
}
