
//创建了构造函数
function Food(options) {
    //在构造函数中设置好了食物的属性
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.color = options.color || 'green';
}

var position = 'absolute';


//给构造函数的原型对象：也就是构造函数的老公
//原型对象存储公共的方法
Food.prototype.render = function (map) {
    //随机设置x和y的值        min  max=地图最大的宽度除以一个食物的宽度-1
    // this.x=Tools.getRandom(0,map.offsetWidth/this.width-1)*this.width;
    // this.y=Tools.getRandom(0,map.offsetHeight/this.height-1)*this.height;


    //动态创建div 页面上显示的食物
    var div = document.createElement('div');
    map.appendChild(div);//appendChild() 方法可向节点的子节点列表的末尾添加新的子节点。
    //设置div的样式
    div.style.position = position;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
};

//测试
var map = document.getElementById('map');
var food = new Food();
food.render(map);

















