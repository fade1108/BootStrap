/*为jQuery家的原型对象添加一个新的accordion()插件函数*/
jQuery.fn.accordion=function () {
var $parent = this;
  //1.自动侵入所需的class,
    //为父元素$parent 加class  accordion
    $parent.addClass("accordion")
    //为$parent 下奇数位置的元素加 class  title
        .children(":even").addClass("title")
    //每个奇数位置的元素 title的下一个兄弟都加content fade
        .next().addClass("content fade")
    //所有偶数位置元素中的第1个加in class
        .first()//获得集合中的第一个元素
        .addClass("in");
  //2.自动绑定事件处理函数
  /*例如$("#my-accordion").accordion*/


$parent.on("click",".title",function () {
    $(this).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")

});
};