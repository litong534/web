function heads(){
    var a1 = [];
    var a2 = [];
    var a3 = [];
    var a4 = [];
    var a5 = [];
    var aa = [];
     $.ajax({
        type : "GET",
        url : "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=CNY",
        dataType : "JSONP",
        data : {},
        success: function(data1){

            var object = JSON.parse(data1);
            $.each(object[0],function(index, value) {

                //console.log(index, value);
                a1[index] = value;

            });
        }
    });


    $.ajax({
        type : "GET",
        url : "https://api.coinmarketcap.com/v1/ticker/Ethereum/?convert=CNY",
        dataType : "JSONP",
        data : {},
        success: function(data2){
            var object = JSON.parse(data2);
            $.each(object[0],function(index, value) {

                //console.log(index, value);
                a2[index] = value;

            });
        }
    });

    $.ajax({
        type : "GET",
        url : "https://api.coinmarketcap.com/v1/ticker/Ripple/?convert=CNY",
        dataType : "JSONP",
        data : {},
        success: function(data3){
            var object = JSON.parse(data3);
            $.each(object[0],function(index, value) {

                //console.log(index, value);
                a3[index] = value;

            });
        }
    });

    $.ajax({
        type : "GET",
        url : "https://api.coinmarketcap.com/v1/ticker/Bitcoin-Cash/?convert=CNY",
        dataType : "JSONP",
        data : {},
        success: function(data4){
            var object = JSON.parse(data4);
            $.each(object[0],function(index, value) {

                //console.log(index, value);
                a4[index] = value;

            });

        }
    });
    $.ajax({
        type : "GET",
        url : "https://api.coinmarketcap.com/v1/ticker/Litecoin/?convert=CNY",
        dataType : "JSONP",
        data : {},
        success: function(data5) {
            var object = JSON.parse(data5);
            $.each(object[0],function(index, value) {

                //console.log(index, value);
                a5[index] = value;

            });
        }

    });
    aa[0] = Promise.resolve(a1);
    aa[1] = Promise.resolve(a2);
    /*aa[2] = a3;
    aa[3] = a4;
    aa[4] = a5;*/
    var res = Promise.all([a1,a2]);
    console.log(res);
    return res;
}

