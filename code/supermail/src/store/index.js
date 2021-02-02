import Vuex from 'vuex'
import Vue from 'vue'
import { INCREAMENT } from "./mutations-types";

Vue.use(Vuex);

let stroe = new Vuex.Store({
  //状态数
  state:{
    counter: 0,
    student: [
      {'name': 'aaa', 'age': 12},
      {'name': 'bbb', 'age': 14},
      {'name': 'ccc', 'age': 16},
    ],
    info:{
      name: 'aaa',
      height: 181,
      age: 12,
      sex: 0
    }
  },
  //更新state状态的唯一方式
  mutations:{
    [INCREAMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    updateStudent(state){
     Vue.set(state.info,'weight',12)
     Vue.delete(state.info,'sex')
    },
    asynsFunction(){
      console.log('aaa');
    }
  },
  //类似计算属性
  getters:{
    more14age(state){
      return state.student.filter(s => s.age >= 14)
    },
    moreNage(state){
      return n => state.student.filter(s => s.age >= n)
    },

  },
  //异步操作
  actions:{
    aUpdateStudent(context){
      setTimeout(() => {
        context.commit('updateStudent')
      },3000)
    }
  },
  modules:{

  }


})

export default stroe;
