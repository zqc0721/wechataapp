// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  //轮播
  data: {
    image: "http://img2.imgtn.bdimg.com/it/u=345049,1197538278&fm=27&gp=0.jpg",
    image2:
      "http://img3.imgtn.bdimg.com/it/u=4223926699,3290941164&fm=26&gp=0.jpg",
    image3:
      "http://img0.imgtn.bdimg.com/it/u=532938265,3417955244&fm=214&gp=0.jpg",
    background: ["demo-text-1"],
    indicatorDots: true, //下面的小圆圈
    vertical: false, //是否滑动为纵向
    autoplay: true, //是否自动切换
    interval: 2000, //自动切换时间间隔
    duration: 500, //滑动动画时长
    circular: true //是否衔接动画
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
});
