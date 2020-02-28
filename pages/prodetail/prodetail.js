// pages/prodetail/prodetail.js
import {request} from "../../utils/network_.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
     proid: '',
     proname:'',
     proimg: "",
     price: 0.0,
     brandimg: "",
     brand:"",
     detail: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     const {proid} = options
     const obj = this
     request({
       path: '/pro/detail',
       data: {
         proid: proid
       }
     }).then(res=>{
       console.log(res)
       const {proname, proimg, price, brandimg, detail,brand} = res.data.data
       obj.setData({
          proid: proid,
          proimg: proimg,
          proname: proname,
          brandimg:brandimg,
          brand:brand,
          price: price,
          detail: detail
       })
     })

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
  showImg: function(e){
    const {url} = e.currentTarget.dataset
    wx.previewImage({
      urls: [url]
    })
  }
})