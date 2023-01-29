import { ClearHistoryApi } from '../../request/apis'
Component({
    properties: {
        historyKeywordList: {
            type: Array,
            value: []
        },
        hotKeywordList: {
            type: Array,
            value: []
        }
    },
    methods: {
        async clearFn() {
            let res = await ClearHistoryApi({ method: 'POST' })
            wx.showToast({
              title: '清除成功!',
              icon:'success'
            })
        },
        gotoProductList(val){
            this.triggerEvent('fn',{
                num:3,
                keyword:val.currentTarget.dataset.keyword
            })
        }
    }
})