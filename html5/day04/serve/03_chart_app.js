//多对多聊天室服务器
var app  =require("http").createServer();
var io  = require("socket.io")(app);
app.listen(3000);
var clientCount  = 0;
io.on("connection",(socket)=>{
    console.log("客户端连接成功");
    //功能1 广播操作 新人加入
    clientCount++;

    //广播所有用户 user:1到来
    var nickname = "user: "+clientCount;
    //将昵称广播所有用户user:1到来
    io.emit("enter",nickname+"来了");
    //功能2 将客户聊天信息广播所有人
    socket.on("message",(data)=>{
        //2.1接收客户发送聊天信息
        console.log(data);
        io.emit("list",nickname+"说"+data);
    })

    //功能3  当客户退出广播所有人
    socket.on("disconnect",(data)=>{
        io.emit("leave",nickname+"离开了")
    })

});