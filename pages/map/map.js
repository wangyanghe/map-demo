// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 109.18474625535735,
    latitude: 30.493896482833193,
    markers:[
      {
        iconPath: "/img/map/scenicspot-1.png",
        id: 0,
        label: {
          content: "test",
          anchorX:-10
        },
        longitude: 109.19801364783362,
        latitude: 30.4818633215907,
        width: 25,
        height: 30,
        callout:{
          content:"景区一",
          borderRadius:2,
          bgColor:"#ADD8E6"
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  markertap(e) {
    console.log(e)
  }
})