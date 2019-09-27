//接收用户输入数值
onmessage = function (event) {
    var num =parseInt(event.data);
    var sum = 0;
    for (var i=1;i<=num;i++){
        sum+=i;

    }
    //将结果返回
    postMessage(sum);
};