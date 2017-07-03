var datastr = location.search;
var dataarr =datastr.slice(1).split('=');
var data = {
    productid:dataarr[1]
};

Route.moneyproduct(data,function(res){
    console.log(res)
    var html = template("contentTmp",res);
    $("#content").html(html);
})
