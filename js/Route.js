(function(){

    var Route = {
        baseURL:'http://127.0.0.1:9090/',
        getCategory:getCategory,
        getCategoryTitle:getCategoryTitle,
        productlist:productlist,
        productList:productList,
        productBijiaTmp:productBijiaTmp,
        reviewTmp:reviewTmp,
        contentTmp:contentTmp,
        moneyproduct:moneyproduct,
        inlanddiscount:inlanddiscount,
        discount:discount,
        coupon:coupon,
        couponproduct:couponproduct,
        sitenav:sitenav,
        brandTitle:brandTitle,
        baicaijia:baicaijia,
        baicaijiayi:baicaijiayi,
        gsproductshop:gsproductshop,
        gsproductarea:gsproductarea,
        gsproductcontent:gsproductcontent
    };

    function getCategory(data,callback){
        var url = Route.baseURL + "api/getcategory";
        $.get(url,data,function(res){
            callback(res);
        },'json');
    }

    function getCategoryTitle(callback){
        var url = Route.baseURL + "api/getcategorytitle";
        $.get(url,function(res){
                callback(res);
        },'json');
    }

    function productlist(data,callback){
        var url = Route.baseURL + "api/getcategorybyid";
        $.get(url,data,function(res){
            callback(res)
        },"json")
    }

    function productList(data,callback){
        var url = Route.baseURL + "api/getproductlist";
        $.get(url,data,function(res){
            callback(res)
        },"json")
    }

    function productBijiaTmp(data,callback){
        var url = Route.baseURL + "api/getproduct";
        $.get(url,data,function( res ){
            callback(res);
        },"json");
    }

    function reviewTmp(data,callback){
        var url = Route.baseURL + "api/getproductcom";
        $.get(url,data,function(res){
            callback(res);
        },"json")
    }

    function contentTmp(data,callback){
        var url = Route.baseURL + "api/getmoneyctrl";
        $.get(url,data,function(res){
            callback(res);
        },"json")
    }

    function moneyproduct(data,callback){
        var url = Route.baseURL + "api/getmoneyctrlproduct";
        $.get(url,data,function(res){
            callback(res);
        },"json")
    }

    function inlanddiscount(callback){
        var url = Route.baseURL + "api/getinlanddiscount";
        $.get(url,function(res){
            callback(res);
        },"json")
    }

    function discount(data,callback){
        var url = Route.baseURL + "api/getdiscountproduct";
        $.get(url,data,function(res){
            callback(res);
        },"json")
    }

    function coupon(callback){
        var url = Route.baseURL + "api/getcoupon";
        $.get(url,function(res){
            callback(res);
        },"json")
    }

    function couponproduct(data,callback){
        var url = Route.baseURL + "api/getcouponproduct";
        $.get(url,data,function(res){
            callback(res)
        },"json")
    }

    function sitenav(callback){
        var url = Route.baseURL + "api/getsitenav";
        $.get(url,function(res){
            callback(res);
        },"json")
    }

    function brandTitle(callback){
        var url = Route.baseURL + "api/getbrandtitle";
        $.get(url,function(res){
            callback(res);
        },"json")
    }

    function baicaijia(callback){
        var url = Route.baseURL + "api/getbaicaijiatitle";
        $.get(url,function(res){
            callback(res);
        },"json")
    }

    function baicaijiayi(data,callback){
       var url =  Route.baseURL + "api/getbaicaijiaproduct";
        $.get(url,data,function(res){
            callback(res);
        },"json")
    }

    function gsproductshop(callback){
        var url = Route.baseURL + "api/getgsshop";
        $.get(url,function(res){
            callback(res)
        },"json")
    }

    function gsproductarea(callback){
        var url = Route.baseURL + "api/getgsshoparea";
        $.get(url,function(res){
            callback(res)
        },"json")
    }

    function gsproductcontent(data,callback){
        var url = Route.baseURL + "api/getgsproduct";
        $.get(url,data,function(res){
            callback(res)
        })
    }

    window.Route = Route;
})(window)

function rem(){
    var w = document.documentElement.clientWidth;
    w = w > 768 ? 768 : w;
    document.querySelector('html').style.fontSize = w / 32 + 'px';
}

rem();

window.onresize = function(){
    rem();
}