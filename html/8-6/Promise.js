function liang() {
    return new Promise(
        function (door,err) {
            var bang="亮亮的接力棒";
            console.log("亮亮开始出发拿起"+bang)
            setTimeout(
                function () {
                    if(Math.random()<0.6){
                        console.log("亮亮到达终点");
                        door(bang);
                    }else {
                        console.log("亮亮摔倒了");
                        err("亮亮摔倒了")
                    }
                }
            ),5000
        }
    )
}
function ran(bang) {
    return new Promise(
        function (door,err) {
            console.log("然然拿到"+bang+"而后开始起跑");
            setTimeout(
                function () {
                    if (Math.random()<0.6){
                        console.log("然然到达终点");
                        door(bang);//功能类似于普通函数return
                    }else {
                        console.log("然然摔倒了，然然放弃比赛");
                        err("给我摔倒")
                    }
                },2000
            )
        }
    )
}
function dongdong(bang) {
    return new Promise(
        function (door) {
            console.log("东东接过"+bang+"开始起跑")
            setTimeout(
                function () {
                    console.log("东东到达终点")
                },2000
            )
        }
    )

}

liang().then(ran).then(dongdong).then(function () {
    console.log("比赛结束")
}).catch(function (err) {
   console.log("因为摔倒导致比赛结束")
});