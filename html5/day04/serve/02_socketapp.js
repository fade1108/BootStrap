//创建web服务器
var app = require("http").createServer();
var io =require("socket.io")(app);

//创建 socket.io对象

//绑定监听端口3000
app.listen(3000);

//接收客户端请求
io.on("connection",(socket)=>{
console.log("客户端连接到服务器了!!")
    //发送与接收数据采用事件绑定和事件触发机制 connection是固定连接事件
    socket.on("message",(data)=> {
        //接收客户端发送来的信息
        console.log("客户端向服务器发送的数据内容是：："+data);
        //触发客户端   定义事件
        socket.emit("server","我是服务器端。我向客户端发送了消息");
    });
    //socket.io提供的方法io.emit   发送消息给所有客户端
    io.emit("list","明天开始我他妈裂开!!");
//接收客户消息，离开  默认事件disconnect
    socket.on("disconnect",(data)=>{
        console.log("客户端离开..")
    })
});