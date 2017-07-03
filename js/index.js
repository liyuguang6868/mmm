$(function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getindexmenu",
        data:null,
        dataType:"json",
        success:function( res ){
            console.log(res)
            var html = template("menuTmp",res);
            $(".row").html(html);

            $('.row li').eq(7).nextAll().hide();
            $('.row li').eq(7).click(function(){
                $(this).nextAll().toggle();
            })

        }
    });


    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        data:null,
        dataType:"json",
        success:function( res ){
            console.log(res)
            var html = template("recommenTmp",res);
            $(".recommen-product-list").html(html);
        }
    })
})