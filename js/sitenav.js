Route.sitenav(function(res){
    console.log(res);
    var html = template("sitenavTmp",res);
    $("#sitenav").html(html);
});