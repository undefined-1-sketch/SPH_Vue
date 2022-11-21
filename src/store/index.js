import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)
import home from "./home";
import search from "./search";

export default new Vuex.Store({
    //实现Vuex仓库模块化开发存储数据
    modules:{
        home,
        search
    }
})
