import {reqCategoryList, reqFloorList, reqBannerList} from '@/api'
//home组件小仓库
const state = {
    catagoryList: [],
    bannerList: [],
    floorList:[]
};
const mutations = {
    CATAGORYLIST(state,catagoryList){
        state.catagoryList = catagoryList;
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
const actions = {
    //向服务器发请求
    async catagoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200) {
            commit('CATAGORYLIST', result.data);
        }
    },
    async bannerList({commit}) {
        let result = await reqBannerList();
        if(result.code == 200) {
            commit('BANNERLIST', result.data);
        }
    },
    async floorList({commit}) {
        let result = await reqFloorList();
        if(result.code == 200) {
            commit('FLOORLIST', result.data);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}
