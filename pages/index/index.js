// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inde: 0,
    time: '12:01',
    date:"2016-10-11"

  },
  bindTimeChange(e){
    console.log(e);
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange(e){
    this.setData({
      date:e.detail.value
    })

  },
  gopage() {
    console.log("3333333");
    wx.switchTab({
      url: '../home/home',
    });
    // wx.navigateTo({
    //   url: '../home/home',
    // })
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