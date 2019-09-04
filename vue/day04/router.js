var routes=[
    //                  对象     "字符串"
    {path:"/",component:index},
    {path:"/login",component:login},
    {path:"/details/:lid",component:details,props:true},
    {path:"/404",component:{
        template:`<main>
        <h2 style="color: #ffc107;background-color:#00aaaa;">
        404: NOt Found</h2>
    </main>`
    }},


];
var router = new VueRouter({
    routes//routes:routes
});