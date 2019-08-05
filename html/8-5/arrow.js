var arr=[12,3,123,23,1,2];
arr.sort( (a,b)=>a-b);
console.log(String(arr));


var str= "you can you up";
str=str.replace(/\b[a-z]/g,(kw)=>{
    return kw.toUpperCase();
});
console.log(str);

var nums=[1,2,3,4,5];
nums.forEach( (elem,i,arr)=>{
    arr[i]*=2;
});
console.log(String(nums));
var nums=[1,2,3,4,5]
var evens = nums.map(function (elem) {
    return elem*2;
})
console.log(String(nums));
console.log(String(evens));

setTimeout( ()=> console.log("boom   ")
,3000);
(()=>{
    console.log("匿名函数执行")
})();


