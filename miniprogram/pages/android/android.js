// pages/android/android.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/and_card1.jpg',
      '../../images/and_card2.jpg',
      '../../images/and_card3.jpg',
      '../../images/and_card4.jpg',
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动播放
    interval: 3000, //停留时间间隔
    duration: 1000, //播放时长
    previousMargin: '50px', //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: '50px', //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    circular: true, //是否采用衔接滑动
    currentSwiperIndex: 0, //swiper当前索引
  },
  swiperBindchange(e) {
    this.setData({
      currentSwiperIndex: e.detail.current
    })
  },
  web:function(){
    wx.navigateTo({
      url: '/pages/web/web',
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
  php:function(){
    wx.navigateTo({
      url: '/pages/php/php',
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