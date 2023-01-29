import request from './request'
// 请求首页数据
export const GetHomeDataApi=()=> request("/index/index")

// 请球搜索页面的历史和热门数据
export const HistoryHotApi = ()=>request('/search/index')

//请求清除历史记录
export const ClearHistoryApi = (params)=>request('/search/clearhistory',params)

// 搜索框商品搜索
export const SearchGoodList = (params)=>request('/goods/list',params)