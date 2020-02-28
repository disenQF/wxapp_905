//index.js
import {request} from "../../utils/network_.js"

//获取应用实例
const app = getApp() // app.js创建的App对象

Page({
  data: {
     items: []
  },

  onLoad: function () {
    console.info(app.globalData.welcome)
    console.info('---index load---')   
  },
  onUnload: function(){
    console.info('---index unload---')
  },
  // 显示和隐藏会被多次调用---页面切换时
  onShow: function(){
    console.info('---index show---')
  },
  onHide: function(){
    console.info('---index hide---')

  },
  onReady: function(){
     // 页面渲染完成后
     console.info('--index onReady---')

     // 请求所有商品的数据
    request({
       path: '/pro', 
       method: 'GET', 
       data: {
         pageCode: 0,
         limitNum: 20
       }
    }).then(res=>{
      console.info(res)
      this.setData({
         items:  [...res.data.data]
      })

    }).catch(e=>{
      console.error(e)
    })

  },
  onPullDownRefresh: function(){
    console.info('--下拉刷新---')
  },
  onReachBottom: function(){
    console.info('--上拉加载更多---')

    wx.showLoading({
      title: '正在加载数据',
    })
    setTimeout(()=>{
      wx.hideLoading()  // 隐藏加载更多
    },5000)
  }
})
