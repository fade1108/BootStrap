//入口函数 id=fullpage
$(function(){
    $('#fullpage').fullpage({
        navigation:true//是否显示项目导航
        ,
        loopBottom:true//演示完后滚动到第一屏
        ,
        scrollingSpeed: 800//滚动速度
    });//里面接收json对象形式
});