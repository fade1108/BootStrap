// 功能一：创建食物功能
// 1：创建食物构造函数 fruitObj
var fruitObj = function () {
    // 1.1：添加食物状态属性alive true显示 false 隐藏
    this.alive = [];
    // 1.2：创建两个图片对象
    this.blue = new Image();
    this.orange = new Image();
    // 1.3:创建位置数组x,y 保存食物位置
    this.x = [];
    this.y = [];
    // 1.4:创建数组保存 l 图片宽度和高度
    this.l = [];
    // 1.5：创建数组保存速度 spd 生长向上漂浮
    this.spd = [];
    // 1.6：创建数组保存食物类型 "blue" "orange"
    this.fruitType = [];
    // 1.7：创建数组保存第几个海葵 
    this.aneNo = [];
}
// 2：为食物的构造函数添加属性 num=30
fruitObj.prototype.num = 30;
// 3：为食物构造函数添加方法 init
fruitObj.prototype.init = function () {
    // 3.1：创建循环遍历数组所有食物
    for (var i = 0; i < this.num; i++) {
        // 3.2：给食物状态位置海葵编号速度蕾西
        this.alive[i] = true;
        this.x[i] = Math.random() * 800;
        this.y[i] = Math.random() * 600;
        this.l[i] = 0;
        this.fruitType[i] = "";
        this.spd[i] = 0;
    }
    // 3.3：循环外部下载两个图片
    this.blue.src = "src/blue.png";
    this.orange.src = "src/fruit.png";
    console.log(this);
}
// 4：为食物构造函数添加方法 draw
fruitObj.prototype.draw = function () {
    // 4.1：创建循环每个食物
    for (var i = 0; i < this.num; i++) {
        // 4.2：判断当前食物是否活动
        if (this.alive[i]) {
            // 4.3：判断当前食物类型
            if (this.fruitType[i] == "blue") {
                var pic = this.blue;
            } else {
                var pic = this.orange;
            }
            // 4.4：判断当前食物宽度<=14
            // 4.5：修改l
            // 4.6：修改y
            if (this.l[i] <= 14) {
                this.l[i] += this.spd[i] * deltaTime;
            } else {
                this.y[i] -= this.spd[i] * deltaTime * 3;
            }
            // 4.7：绘制食物
            ctx2.drawImage(pic, this.x[i], this.y[i], this.l[i], this.l[i]);
        }
    }
    // 4.8：如果当前食物漂浮屏幕
    // 4.9：将当前食物状态修改隐藏
}
// 5：将fruit.js 添加index.html
// 6：在main.js 创建食物对象并且调用相关方法
// 6.1：创建全局函数监听画布上食物数据  不足15个：挑   计算数组
function fruitMonitor() {
    // (1)累加状态为true几个元素
    var num = 0;
    // (2)如果当前食物的状态是显示 ++
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) num++;
    }
    // console.log(num);
    if (num < 15) { 
        sendFruit(); //挑一个食物
        return; //一次挑一个
    }
}
// 6.2：创建全局函数：挑，按下标取第一个
function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        // 找到第一个食物出生
        if (fruit.alive[i] == false) {
            fruit.born(i); //出生!!!下标[i]
            return; //一次生一个
        }
    }
}
// 6.3：为构造函数添加初生食物方法
// 6.4：在main.js gameloop 调用监听画布全局函数
// 6.5：为构造函数添加方法：食物隐藏





// 功能二：监听画布上活动食物是否有15个。不足15个挑一个食物出生