//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        // swiper配置
        current: 0,
        indicatorDots: !0,
        interval: 3e3,
        // swiperitem
        images:[
            {   
                index: '1',
                linkType:"http_link",
                url: 'http://www.free4inno.com/resources/913b0a61-389a-4ed6-900a-b18dbb847d68sea2.jpg',
                title: '自由之翼',
                link: 'http://www.free4inno.com'
            },
            {
                index: '2',
                linkType: "pic",
                url: 'https://www.bupt.edu.cn/pluginres/picpush/db90475d30133b3e9e22d0e3ac53b540.jpg',
                title: '2',
                link: ''
            },
            {
                index: '3',
                linkType: "http_link",
                url: 'https://www.bupt.edu.cn/pluginres/picpush/1483253ac76bfe29f6601863cb23357f.jpg',
                title: '3',
                link: 'https://www.bupt.edu.cn/'
            },
        ]
        
    },
    //事件处理函数
    toMap: function() {
        wx.navigateTo({
            url: '../map/map'
        })
    },
    onLoad: function() {

    }, 
    clickSwiper: function(e) {
        let url = e.currentTarget.dataset.url;
        let title = e.currentTarget.dataset.title;
        let linkType = e.currentTarget.dataset.linktype;

        console.log(url)

        if("http_link" == linkType){
            wx.navigateTo({
                url: '/pages/web-page/web-page?url='+url+'&title='+title
            })
        }
    },
    toIntroduce: function(e) {
        let url ="https://www.bupt.edu.cn/";
        let title = "景区介绍";

        wx.navigateTo({
            url: '/pages/web-page/web-page?url=' + url + '&title=' + title
        })
    }
})