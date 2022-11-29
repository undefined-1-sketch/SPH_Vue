import requests from "./request";
import mockRequest from './mockAjax'

//三级联动接口
export const reqCategoryList = ()=>requests.get('/product/getBaseCategoryList');

//轮播图数据
export const reqBannerList = ()=>mockRequest('/banner')

//floor数据
export const reqFloorList = ()=>mockRequest('/floor')

//search数据
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params})

//商品详情
export const reqGoodsInfo = (skuid )=>requests({url:`/item/${skuid}`,method:'get'})