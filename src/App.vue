  <script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import axios from 'axios';
  import {store} from './data/store'

  export default {

    components:{
      Header,
      Main,
      Footer

    },
   
    methods:{
      getApi(type){
        axios.get(store.apiUrl +type, {
          params: store.apiParams

        })
        .then( res=> {
          store[type] = res.data.results;
        })
      }

    },
    // queste sono le mie 2 chiamate api
    mounted(){
      this.getApi('movie')
      this.getApi('tv')
    }
  
  }
  </script>

<template>

  <Header />
  <Main />
  <Footer/>

</template>


<style lang="scss" >
@import './assets/scss/main.scss';

</style>