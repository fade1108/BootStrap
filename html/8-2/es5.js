/*

 */
"use strict";
var eric={
    eid:1001,
    ename:"埃里克"
};
Object.defineProperty(eric,"eid",{
    writable:true
});
eric.eid=-2;
console.log(eric);
/*
保护对象结构的三个属性
 */
//阻止对eric对象添加任何新增属性
//Object.preventExtensions(eric);
eric.Eid=-2;
console.log(eric);
//2.密封，在兼具防扩展同时，进一步禁止删除现有属性
Object.seal(eric);//所有对象都要密封，将configurable设置为false
//3.冻结，在兼具密封的基础上，进一步禁止修改属性的值
Object.freeze(eric);
eric.Did=5;//不能成功
eric.eid=-3;//不能成功
console.log(eric);









