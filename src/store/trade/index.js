import { reqAddressList, reqOrderInfo } from "@/api";

const state={
    addressList:[],
    orderInfo:{}
};
const mutations = {
    GETADDRESSLIST(state,addressList){
        state.addressList=addressList;
    },
    ORDERINFO(state,orderInfo){
        state.orderInfo=orderInfo;
    }
};
const actions = {
    async getAddressList({commit}){
        let result = await reqAddressList();
        if(result.code==200){
            commit('GETADDRESSLIST',result.data);
        }
    },
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        if(result.code==200){
            commit('ORDERINFO',result.data);
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