Component({
    data: {
        tabbarArr: [{
            pagePath: "/pages/home/home",
            text: "首页",
            icon: 'home-o'
        }, {
            pagePath: "/pages/topic/topic",
            text: "专题",
            icon: 'label-o'
        }, {
            pagePath: "/pages/category/category",
            text: "分类",
            icon: 'apps-o'
        }, {
            pagePath: "/pages/cart/cart",
            text: "购物车",
            icon: 'cart-o'
        }, {
            pagePath: "/pages/user/user",
            text: "用户",
            icon: 'user-o'
        }],
        active: 0,
    },
    methods: {
        onChange(event) {
            console.log(event.detail);
            // event.detail 的值为当前选中项的索引
            this.setData({ active: event.detail });

            // 切换tabbar
            wx.switchTab({
                url: this.data.tabbarArr[event.detail].pagePath,
            })
        },
    },

})