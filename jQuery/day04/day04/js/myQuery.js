//为jquery类型添加一个sun函数，计算和
/*jQuery.prototype.sum*/
jQuery.fn.sum=function () {
  /*console.log("我是保存在jQuery的原型对象中的sum()函数")*/

  var sum=0;

  this.each(function (i,domElem) {
      sum+=parseFloat(domElem.innerHTML)
  });
  return sum;






};