Component({
    properties: {
        goodsList: {
            type: Array,
            value: []
        },
        filterCategory: {
            type: Array,
            value: []
        },
        filterCategoryCurrentId: {
            type: Number,
            value: 0
        }
    },
    data: {
        option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
        ],
        option2: [
            { text: '默认排序', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
        ],
        value1: 0,
        value2: 'a',
    }

})