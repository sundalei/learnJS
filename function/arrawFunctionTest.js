'use strict';

var fn = x => {
    if(x > 0) {
        return x * x;
    } else {
        return -x * x;
    }
}
fn(5);
fn(-5);

/*******************************************************************************/

var fn = x => ({foo: x});
fn(3);

/*******************************************************************************/
var obj = {
    birth : 1990,
    getAge : function() {
        var b = this.birth;
        var fn = function() {
          return new Date().getFullYear() - this.birth;  //this undefined
        }
        return fn();
    }
};
obj.getAge();

/*******************************************************************************/

var obj = {
    birth : 1990,
    getAge : function() {
        var b = this.birth;  // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj
        return fn();
    }
};
obj.getAge();

/*******************************************************************************/

var obj = {
  birth: 1990,
  getAge: function(year) {
    var b = this.birth;
    var fn = (y) => y - this.birth;
    return fn.call({birth:2005}, year);
  }
}
obj.getAge(2016);
