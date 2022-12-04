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
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: '/cart/addToCart/' + skuId + '/' + skuNum, method: 'post' })
////获取购物车列表
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })
//删除购物车商品
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
//切换商品选中状态
export const reqCheckCart = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
//获取验证码
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//注册用户
export const reqRegister = (params)=>requests({url:'/user/passport/register',method:'post',data:params})
//登陆
export const reqLogin = (user)=>requests({url:'/user/passport/login',method:'post',data:user})
//获取用户信息
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})