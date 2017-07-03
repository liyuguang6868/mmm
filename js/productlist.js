var datastr=location.search
var dataarr =datastr.slice(1).split('&').map(function (v) {
    return v.split('=');
});
var data = {
    categoryid:dataarr[0][1]
};
Route.productlist(data,function(res){
    var html = template("product-list-title-tmp",res);
    $(".product-list-title").html(html);
})

Route.productList(data,function(res){
    console.log(res);
    var html = template("product-list-tmp",res);
    $(".product-list>ul").html(html);
})