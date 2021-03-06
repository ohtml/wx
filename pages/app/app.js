// pages/app/app.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    nodelist: [
      
    ]

  },
  // 滚动到底部的方法
  lazyload(){
    let index = this.data.index+1;
    let nodelist = wx.getStorageSync('list') || [];
    let newlist = nodelist.reverse();
    this.setData({
      nodelist: newlist.slice(0, index*5),
      index
    })
  } ,
  clearStorage(){
    wx.showToast({
      title:"删除了"
    })
    wx.clearStorageSync();
    this.setData({
      nodelist:[]
    })
  },
  nodeDetail: () => {
    wx.navigateTo({
      url: 'detail/detail',
    })

  },
  
  onPullDownRefreash(){
    //去请求接口
    setTimeout(function(){
      wx.stopPullDownRefresh();
    },1000)
     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let nodelist = wx.getStorageSync('list') || [];
    // this.setData({
    //   nodelist
    // })
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
    let nodelist = wx.getStorageSync('list') || [];
    let newlist = nodelist.reverse();
    this.setData({
      nodelist: newlist.slice(0, 5)
    })
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