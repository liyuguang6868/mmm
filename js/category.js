
Route.getCategoryTitle(function(res){
    console.log(res)
    var html = template("tableTmp",res);
    $("#table").html(html);



    //每次click获取数据
    $('.table_a').click(function () {
        var titleId = $(this).attr('titleId');
        var oUL=$(this).next();//获取兄弟元素
        oUL.toggleClass('hide');
        // 第二次里面的内容
        Route.getCategory({titleid: titleId}, function (res) {
            console.log(res)
            var html = template('tableTmp-1', res);
            oUL.html(html)
        });
    });





})
