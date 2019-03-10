// pages/web-page/web-page.js

Page({
    data: {
        url: "",
        title: ""
    },
    onLoad: function (param) {
        var page = this;
        page.setData({
            url: param.url,
            title: param.title
        }), console.log(page.data.url);
        
        if(param.title){
            wx.setNavigationBarTitle({
                title: param.title
            })
        }
    }
});