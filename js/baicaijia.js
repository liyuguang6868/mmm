Route.baicaijia(function(res){
    var html = template("navTmp",res);
    $("#nav").html(html);

    Route.baicaijiayi({titleid:0},function(res){
        var html = template("contentTmp",res);
        $("#content").html(html);
    })

    $("#ul li").eq(0).addClass('line');

    $("#ul li").click(function(){
       $(this).addClass('line').siblings().removeClass('line');
        var id = $(this).data("titleid")
        var data = {
            titleid:id
        }
        Route.baicaijiayi(data,function(res){
            var html = template("contentTmp",res);
            $("#content").html(html);
            console.log(res)
        })
    })
})

