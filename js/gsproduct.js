var data = {
    shopid:0,
    areaid:0
}

$("#nav").find("li").click(function(){
    var id = $(this).data("id");
    $("#"+id).toggleClass("hide").siblings(".ul").addClass("hide");
    $("#"+id).find("li").click(function(){
        $("#"+id).addClass("hide");
    })
})

Route.gsproductshop(function(res){
    var html = template("oul1Tmp",res);
    $("#oul1").html(html);

    $(".ul").find("li").click(function(){
        var text = $(this).text();
        $(this).parent().siblings("a").html(text);

        var shopid =  $(this).find("a").data("shopid");
        data.shopid = shopid || 0;

        Route.gsproductcontent(data,function(res){
            console.log(res)
            var html = template("contentTmp",res)
            $("#content").html(html);
        })

    })

})

Route.gsproductarea(function(res){
    var html = template("oul2Tmp",res);
    $("#oul2").html(html);

    $(".ul").find("li").click(function(){
        var text = $(this).text();
        $(this).parent().siblings("a").html(text);

        var areaid =  $(this).find("a").data("areaid");
        data.areaid = areaid || 0;

        Route.gsproductcontent(data,function(res){
            console.log(res)
            var html = template("contentTmp",res)
            $("#content").html(html);
        })

    })

})


Route.gsproductcontent(data,function(res){
    console.log(res)
    var html = template("contentTmp",res)
    $("#content").html(html);
})
