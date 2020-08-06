//index.js
const app = getApp()

Page({
  data: {
    "bnrUrl": [
      {
        "url": "../../images/banner1.jpg"
      }, {
        "url": "../../images/banner2.jpg"
      }, {
        "url": "../../images/banner3.jpg"
      }, {
        "url": "../../images/banner4.jpg"
      }, {
        "url": "../../images/banner5.jpg"
      }, {
        "url": "../../images/banner6.jpg"
      }
    ]
  },
  // 唤起通讯录
  freeTell: function(){
    wx.makePhoneCall({
      phoneNumber: '03746837666',
    })
  },
  // 页面跳转
  summary: function(){
    wx.navigateTo({
      url: '/pages/summary/summary',
    })
  },
  procedure: function(){
    wx.navigateTo({
      url: '/pages/procedure/procedure',
    })
  },
  address: function(){
    wx.switchTab({
      url: '/pages/address/address',
    })
  }
})
