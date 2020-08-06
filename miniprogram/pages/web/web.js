// pages/web/web.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TopIndex: 0,
    TopIndexs:0
  },
  click(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      TopIndex: index
    })
  },
  clicktwo:function(e){
    let indexs = e.currentTarget.dataset.indexs
    this.setData({
      TopIndexs: indexs
    })
  },
  php:function(){
    wx.navigateTo({
      url: '/pages/php/php',
    })
  },
  c:function(){
    wx.navigateTo({
      url: '/pages/c++/c++',
    })
  },
  ui:function(){
    wx.navigateTo({
      url: '/pages/ui/ui',
    })
  },
  linux:function(){
    wx.navigateTo({
      url: '/pages/linux/linux',
    })
  },
  android:function(){
    wx.navigateTo({
      url: '/pages/android/android',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})