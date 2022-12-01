import requests from "./request";
import mockRequest from './mockAjax'

//三级联动接口
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');
//轮播图数据
export const reqBannerList = () => mockRequest('/banner')
//floor数据
export const reqFloorList = () => mockRequest('/floor')
//search数据
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })
//商品详情
export const reqGoodsInfo = (skuid) => requests({ url: `/item/${skuid}`, method: 'get' })
//添加到购物车(对已有物品进行数量改动)
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: '/cart/addToCart/'+skuId+'/' + skuNum, method: 'post' })
////获取购物车列表
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})
