// pages/daohang/daohang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Images: [
      {
        name: "喜多多",
        url: "../../images/daohang/微信图片_20190106154348_03.jpg"
      }, {
        name: "冰雪皇后",
        url: "../../images/daohang/微信图片_20190106154348_05.jpg"
      }, {
        name: "肯德基",
        url: "../../images/daohang/微信图片_20190106154353_03_03.jpg"
      }, {
        name: "必胜客",
        url: "../../images/daohang/微信图片_20190106154353_03_05.jpg"
      }, {
        name: "山林",
        url: "../../images/daohang/微信图片_20190106154336_03.jpg"
      }, {
        name: "广州天福",
        url: "../../images/daohang/微信图片_20190106154353_03_07.jpg"
      },
    ],
    swiperIndex:""
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

  },
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
    })
  },
  click(e){
    const that = this;
    that.setData({
      swiperIndex: e.currentTarget.dataset.index,
    })
  }
})