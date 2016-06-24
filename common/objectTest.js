var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    'middle-school': 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

xiaoming.name; // 小明
xiaoming.birth; // 1990
xiaoming.age;
xiaoming.age = 18;
xiaoming.age;
delete xiaoming.age;
xiaoming.age;

/******************************************************************************/

var xiaoming = {
  name : '小明'
};
xiaoming.age; //undefined
xiaoming.age = 18; //新增一个age属性
xiaoming.age; //18
delete xiaoming.age; //删除age属性
xiaoming.age; //undefined
delete xiaoming['name']; //删除name属性
xiaoming.name; //undefined
delete xiaoming.school; //删除一个不存在的school属性也不会报错

/******************************************************************************/

var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

'name' in xiaoming; //true
'grade' in xiaoming; //false
'toString' in xiaoming; //true

xiaoming.hasOwnProperty('name'); //true
xiaoming.hasOwnProperty('toString'); //false
