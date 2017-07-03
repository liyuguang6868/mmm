Route.brandTitle(function(res){
    console.log(res)
    var html = template("contentTmp",res);
    $("#content").html(html);
})
