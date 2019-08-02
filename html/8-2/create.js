//Object.create()函数，没有构造函数的情况下，也想创建一个子对象
//1创建一个新对象，继承一个父对象，为新对象添加自由属性
//var 子对象=Object.create(父对象,{})
"use strict";

var father={
    bal:1000000,
    car:"infiniti"
};
var hmm=Object.create(father,{
    //必须用defineProperties中的语法
    phone:{
        value:"iPhone xs",
        writable:true,
        enumerable:true,
        configerable:false
    },
    money:{
        value:3000,
        writable:true,
        enumerable:true,
        configerable:false
    }
});
//Object.preventExtensions(hmm);
hmm.Eud=2;
console.log(hmm);
console.log(hmm.car,hmm.bal);
console.log(hmm.phone,hmm.money);
//
function calc(vase,bonus1,bonus2) {
    console.log(this.ename+'ojbk'+vase+"sad"+bonus1)
}
var lilei={ename:"Li Lei"};
var hmm={ename:"Han Meimei"};
//call   在这一次调用函数是，临时替换一次this
calc.call(lilei,100,1000);
function add(price,name) {
    console.log("公司名："+this.name1+"商品:"+name+"价格"+price);
}
var quduoduo={name1:"娃哈哈"};
add.call(quduoduo,20,"维c牛奶");
var arr = [200,"象拔蚌"];
//apply=call
add.apply(quduoduo,arr);
//bind  不调用函数
//再创建一个和add功能完全一样的函数，从此直接调ladd
var ladd=add.bind(quduoduo);
ladd(200,"苹果公司");



































