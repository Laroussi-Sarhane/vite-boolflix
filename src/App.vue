  <script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import axios from 'axios';
  import {store} from './data/store'
  import Card from './components/partialss/Card.vue';

  export default {

    components:{
      Header,
      Main,
      Footer,
        Card

    },
   
    methods:{
      getApi(type){
        axios.get(store.apiUrl + type, {
          params: store.apiParams

        })
        .then( res=> {
          store[type] = res.data.results;
          console.log(store[type]);
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
  <Card />

</template>


<style lang="scss" >
@import './assets/scss/main.scss';

</style>