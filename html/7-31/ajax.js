//要封装一个函数，保存重用的代码
//1.代码中所有不确定的，都定义为形参变量！
//2，所有不一定执行的代码都要加

//三个参数1.url要请求的目标服务端接口地址  2type不同的请求类型
//3.data 要发送的参数，要求：必须是：变量1=值1&变量2=值2& 不要带问号，且必须是字符串
function ajax(url,type,data) {
    var xhr=new XMLHttpRequest();
    //如果发送get请求时，带参数
    if(type=="get"&&data!==undefined){
        //则需要将参数用？连接到url地址结尾
        url+="?"+data;
    }

    xhr.open(type,url,true);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            var result=JSON.parse(xhr.responseText);

        }
    }
    if(type=="post"){//只有发送的是post请求时，才需要添加请求头
        xhr.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
    }
    if(type=="post"){//只有post请求，才会将参数放在send()中发送
        xhr.send(data);
    }else {//而如果是get请求，send()中什么都没有
        xhr.send();
    }

}