// pages/popup/popup.js
import { HistoryHotApi, SearchGoodList } from '../../request/apis'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        blockShow: 1,
        defaultKeyword: '',
        historyKeywordList: [],
        hotKeywordList: [],
        keyword: '',
        goodsList: [],
        filterCategory: [],
        filterCategoryCurrentId: 0,
    },
    changeBlockShow(val) {
        this.setData({
            blockShow: val.detail.num,
            keyword: val.detail.keyword
        }, () => {
            // 调用发送请求的方法
            this.goodSearch()
        })


    },
    async goodSearch() {
        // 专门用来发送 产品列表 的请求
        let res = await SearchGoodList({
            data: {
                keyword: this.data.keyword
            }
        })
        let { goodsList, filterCategory } = res.data

        let arr = filterCategory.map(item => {
            return { text: item.name, value: item.id }
        })

        let currentId = filterCategory.filter(item => item.checked)[0].id
        
        this.setData({
            goodsList: goodsList,
            filterCategory: arr,
            filterCategoryCurrentId: currentId
        })
        
    },
    onCancel() {
        wx.navigateBack()  // 返回上一页
    },
    onSearch(e) {
        console.log(e);
        // 发送请求
        this.setData({
            blockShow: 3,
            keyword: e.detail
        })
        this.goodSearch()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        let res = await HistoryHotApi()
        let { defaultKeyword, historyKeywordList, hotKeywordList } = res.data

        this.setData({
            defaultKeyword, historyKeywordList, hotKeywordList
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})