//index.js
import {request} from "../../utils/network_.js"

//获取应用实例
const app = getApp() // app.js创建的App对象

Page({
  data: {
     items: [],
     page: 0 //当前页码
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
      // 更新页面的数据， 对应修改是Page中data属性
      this.setData({
         items:  [...res.data.data]
      })

    }).catch(e=>{
      console.error(e)
    })

  },
  onPullDownRefresh: function(){
    console.info('--下拉刷新---')
    request({
      path: '/pro',
      data: {
        pageCode: 0,
        limitNum: 20
      }
    }).then(res => {
      console.info(res)
      this.setData({
        items: [...res.data.data],
        page: 0
      })

      wx.stopPullDownRefresh() // 停止下拉刷新

    }).catch(e => {
      console.error(e)
    })

  },
  onReachBottom: function(){
    console.info('--上拉加载更多---')
    // 获取当前页码
    const currentPage = this.data.page
    const currentData = this.data.items

    request({
      path: '/pro',
      data: {
        pageCode: currentPage+1,
        limitNum: 20
      }
    }).then(res => {
      console.info(res)
      const {code, message, data} = res.data
      if(code == "10000"){
          wx.showToast({
            title: message
          })
      }else{
        this.setData({
          items: [...currentData, ...res.data.data],  // 累加数据
          page: currentPage + 1
        })
      }
    }).catch(e => {
      console.error(e)
    })
  },
  showDetail: function(e){
    // 获取事件的数据，通过data-* 来设置的
    const {proid} = e.currentTarget.dataset
    
    // 打开详情页面
    // 跳转页面的url中，以/开头，表示绝对路径
    wx.navigateTo({
      url: '/pages/prodetail/prodetail?proid='+proid
    })
  }
})
