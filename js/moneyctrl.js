var data = {
    pageid:0
}
Route.contentTmp(data, function (res) {
    console.log(res)
    var html = template("contentTmp",res);
    $("#content").html(html);
})
