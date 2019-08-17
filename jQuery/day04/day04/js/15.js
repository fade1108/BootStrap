const http=require("http");
http.createServer(
    (req,res)=>{
        //  淇敼鍝嶅簲澶� 鎴愬姛
        res.writeHead(200,{
            //"Access-Control-Allow-Origin":"http://127.0.0.1:5500",
            //"Access-Control-Allow-Origin":"*",//
            "Content-Type":"text/plain;charset=utf-8"//
        });
        res.write("背景晴 15~25");
        res.end();
    }
).listen(3000);
