Route.inlanddiscount(function(res){
    var html = template("contentTmp",res)
    $("#content").html(html);
})
