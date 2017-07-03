var datastr=location.search
var dataarr =datastr.slice(1).split('&').map(function (v) {
    return v.split('=');
});
var data = {
    productid:dataarr[0][1]
};

Route.productBijiaTmp(data,function(res){
    var html = template("productBijiaTmp",res);
    $("#neirong").html(html);
})

Route.reviewTmp(data,function(s){
    var html = template("reviewTm",s);
    $("#review").html(html);
    console.log(html)
})