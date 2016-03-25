var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    'middle-school': 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

//alert(xiaoming.name);
//alert(xiaoming.birth);
//xiaoming.age = 18;
//alert(xiaoming.age);
//delete xiaoming.age;
//alert(xiaoming.age);

//alert('name' in xiaoming);
//alert('toString' in xiaoming);
alert(xiaoming.hasOwnProperty('name'));
alert(xiaoming.hasOwnProperty('toString'));