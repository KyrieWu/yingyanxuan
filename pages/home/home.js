// pages/home/home.js

import { GetHomeDataApi } from '../../request/apis'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner: []
    },
    gotoPopUp() {
        wx.navigateTo({
            url: '/pages/popup/popup',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        // wx.request({
        //     url: 'http://kumanxuan1.f3322.net:8001/index/index', 
        //     success (res) {
        //       console.log(res.data)
        //     }
        //   })
        let result = await GetHomeDataApi()
        let { banner } = result.data
        this.setData({ banner })
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
        this.getTabBar().setData({
            active: 0
        })
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