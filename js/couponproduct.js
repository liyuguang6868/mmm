var datastr = location.search;
var dataarr =datastr.slice(1).split('=');
var data = {
    couponid:dataarr[1]
};
Route.couponproduct(data,function(res){
    console.log(res)
    var html = template("couponproductTmp",res);
    $("#couponproduct").html(html);
})