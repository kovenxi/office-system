import Vue from 'vue';
import Vuex from 'vuex';
import home from './home'
Vue.use(Vuex)

const state = {
  buyList : [],
  carList : [],
  buyList2 : [],
  carList2 : [],
  vip : 'no',
  emRigst: 'no',
};

const mutations = {
  addBuyList(state,list){
    state.buyList.push(list)
  },
  delBuyList(state,index){
    state.buyList.splice(index,1)
  },
  addCarList(state,list){
    state.carList.push(list)
  },
  delCarList(state,index){
    state.carList.splice(index,1)
  },
  addBuyList2(state,list){
    state.buyList2.push(list)
  },
  delBuyList2(state,index){
    state.buyList2.splice(index,1)
  },
  addCarList2(state,list){
    state.carList2.push(list)
  },
  delCarList2(state,index){
    state.carList2.splice(index,1)
  },
};

const actions = {};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    home
  }
})