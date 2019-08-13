function getchild(parent) {
    var children = parent.children;
    for (var key of children){
        console.log(key.nodeName);
        if(key.innerHTML==="{{count}}"){
            key.innerHTML=100;
        }else if(key.innerHTML==="{{total}}"){
            key.innerHTML=200;
        }
        if(key.children.length>0){
            arguments.callee(key);
        }
    }
}
getchild(document.body)
