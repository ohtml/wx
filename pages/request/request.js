// pages/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val: "",
    list:[]

  },
  bindval(e) {
    this.setData({
      val: e.detail.value,
    })

  },
  bindsearch(){
    wx.request({
      url: 'https://api.m.jd.com/?functionId=nineNine&client=nc&clientVersion=1.0.0',
      data: {
       body: {"pageNum":"1","pageSize":"10"},

      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        // 'content-type': 'application/json'
      }, // 设置请求的 header
      success: (res)=>{
        console.log(res);
        this.setData({
          list:res.data.nineList
        })
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bindsearch()

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