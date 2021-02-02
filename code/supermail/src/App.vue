<template>
  <div id="app">
    <test></test>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="updateStudent">更新</button>
    <button>异步</button>
    <h1 >{{$store.state.counter}}</h1>
    <h1>{{$store.state.info}}</h1>
    <h1>{{$store.getters.more14age}}</h1>
    <h1>{{$store.getters.moreNage(12)}}</h1>
  </div>
</template>

<script>
  import TarBar from "./components/TarBar/TarBar";
  import Test  from "./components/Test";
  import { INCREAMENT } from "./store/mutations-types";
  export default {
  name: 'App',
  data() {
    return {
    }
  },
  created() {
  },
  components:{
    Test
  },
  methods:{
    add(){
      this.$store.commit(INCREAMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    updateStudent(){
      console.log('aaa');
      this.$store.dispatch('aUpdateStudent')
    }
  }
}
</script>

<style>
  .aaa{
    width: 100px;
    height: 100px;
    background-color: red;
  }
  .bbb{
    width: 100px;
    height: 100px;
    background-color: yellow;
  }
  .ccc{
    width: 100px;
    height: 100px;
    background-color: green;
  }
</style>
