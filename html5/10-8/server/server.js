const http = require("http");
http.createServer(
    //每当有客户端发来请求时，自动调用一下回调函数
    (req,res)=>{
        var weather = "北京 晴 18-32";
        res.writeHead(200,{
            "Content-Type":"text/plain;charset=utf-8"
        });
        res.write(weather);
        res.end();

    }


).listen(3213);