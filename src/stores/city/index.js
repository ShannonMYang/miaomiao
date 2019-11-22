/*
 * @Author: your name
 * @Date: 2019-11-22 10:29:35
 * @LastEditTime: 2019-11-22 14:11:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \miaomiao\src\stores\city\index.js
 */
const state = {
    nm : window.localStorage.getItem('nowNm') || '西安',
    id : window.localStorage.getItem('nowId') || 1
};

const actions = {

};

const mutations = {
    // 状态管理方法；一般约定全大写，表明其是状态管理的方法；
    CITY_INFO(state, payload) {
        state.nm = payload.nm;
        state.id = payload.id;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}