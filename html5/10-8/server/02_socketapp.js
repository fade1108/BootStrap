//1.创建web服务器
var app = require("http").createServer();
//2.创建socket.io对象
var io  =require("socket.io")(app);
//3。绑定监听端口
app.listen(9000);
//5。
//4.接收客户端请求
io.on("connection",(socket)=>{
    console.log("有客户端连接到服务器了!!!")
    //服务器端接收客户端数据
    //绑定事件.接收客户端向服务器发送的数据
    socket.on("message",(data)=>{
        console.log(data);
    })
    //触发自定义事件 向客户端发送数据
    socket.emit("server","我是服务端向你发了数据")
    //发送消息给所有客户端
    io.emit("list","公告公告")
    //接收客户消息，离开 默认时间disconnect
    socket.on("disconnect",(data)=>{
        console.log("当前客户离开..")
    })
});