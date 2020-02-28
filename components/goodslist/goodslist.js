// components/goodslist/goodslist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      items: String,
      index: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
     content: '初始化的数据'
  },
  
  observers: {
    "items, index": function(items, index){
       this.setData({
           content: items+index
       })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showGoods: function(event){
        // 获取点击事件的data-* 相关的参数
        const {id} = event.currentTarget.dataset
        console.info('---组件内部 点击事件，并传入显示数据的id---')

        // 触发事件，交由页面Page处理
        // 回传的数据，写入到detail对象中
        this.triggerEvent('showItem',{item_id: id}, {})
    }
  }
})
