import { reqGoodsInfo } from "@/api";

const state = {
    goodInfo: {}
};
const mutations = {
    GETGOODSINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
};
const actions = {
    async getGoodsInfo({ commit }, skuid) {
        console.log(skuid);
        let result = await reqGoodsInfo(skuid);
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data);
        }
    }
};
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList;
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}