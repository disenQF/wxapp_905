//app.js
// 全局的（整个小程序的）生命周期的监测
// 共享其它页面的数据 
App({
  onLaunch: function () {
    console.info('---进入小程序--')
    
  },

  onShow: function(){
     console.info('---小程序被显示--')
     // 加载本地数据，如果本地不存在数据时，再从网络API接口中请求
  },

  onHide: function(){
    /**
     * 保存页面数据
     */
     console.info('---小程序被隐藏--')
  },
  globalData: {
    userInfo: null,
    page: 1,
    welcome: "欢迎进入热购小程序"
  }
})