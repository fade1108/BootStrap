//数组函数：在数组中查找一个元素的位置indexOf
//
var reds=[];
while(reds.length<6){
    var num=Math.ceil(Math.random()*33);
    if(reds.indexOf(num)==-1){
        reds.push(num);
    }
}
//
reds.sort(function (a,b) {
   return a-b;
});
console.log(reds);
var blue= Math.ceil(Math.random()*16);
console.log(blue);



var bms=[];
while (bms.length<6){
    var bm=Math.ceil(Math.random()*33);
    if(bms.indexOf(bm)==-1){//如果要检索的字符串值没有出现，则该方法返回-1
        bms.push(bm);
    }
}
bms.sort(function (a,b) {
   return a-b;
});
console.log(bms);
var blue  = Math.ceil(Math.random()*16);
console.log(blue);

//判断数组中是否所有元素都符合要求
// var bool=arr.every(function (t) {
//     return
// });
//every会自动遍历arr中每个元素，每遍历一个元素，就自动调用一次回调函数function
//每次调用function时，自动传入当前正在遍历的元素值和下标位置，而后检查是否符合要求，只有当前元素符合要求，才继续遍历一下个元素。只要
//碰上一个不符合的，就退出遍历，返回 false, 如果正确则返回true

var arr1=[1,2,3,4,5];
var arr2=[2,4,6,4,2];
console.log(
    arr1.every(function (elem,i,arr){
        return elem%2==0;
    }),
    arr2.every(function (elem,i,arr) {
        return elem%2==0;
    })
);
//map保护原数组，创建一个新数组
var nums=[1,2,3,4,5];
var evens=nums.map(function (value) { return value*2 });
console.log(nums);
console.log(evens);

//过滤和汇总
/*
先自动创建一个空数组，再自动遍历原数组中每个元素
每遍历一个元素，就自动调用一次回调函数，如果经过回调幻术验证返回true
则加加入新数组中，如果当前元素经过回调函数验证，返回false

 */
var niunius=[1,2,3,4,5];
var evenss=niunius.filter(
    function (value) {
     return value%2==0;
    }
);
console.log(niunius);
console.log(evenss);
//汇总 对数组中的元素内容进行统计，得出最终结论
var arr=[8,10,9,78,56,"123","不知道"];
var summ=arr.reduce(
    function (prev,elem) {
        return prev+elem;//从0开始累加数组中的每个元素
    }
);
console.log(summ);

//把一个字符打伞成数组  哪个字母出现的最多。出现了几次 
var str1="helloyouamysunshineaway";

var arr5 = str1.split("");
var result=arr5.reduce(
    function (prev,elem) {
        if (prev[elem]===undefined){
            prev[elem]=1;
        }else {
            prev[elem]+=1;
        }
        return prev

    },{}


);
console.log(result);


















































































































