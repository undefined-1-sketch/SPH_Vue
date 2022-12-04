import { reqCartList, reqDeleteCart, reqCheckCart } from '@/api'
const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }
    },
    async deleteCart({ commit }, skuId) {
        let result = await reqDeleteCart(skuId);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    async checkCart({ commit }, { skuId, isChecked }) {
        let result = await reqCheckCart(skuId, isChecked);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faild"));
        }
    },
    deleteAllShopCart({dispatch,getters,state}){
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = dispatch('deleteCart',item.skuId);
            PromiseAll.push(promise);
        });
        return PromiseAll;
    },

    selectAllShopCart({dispatch,getters},checked){
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = dispatch('checkCart', {
            skuId: item.skuId,
            isChecked: checked,
          });
          PromiseAll.push(promise);
        });
        return PromiseAll;
    }
      
};
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}