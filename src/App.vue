  <script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import axios from 'axios';
  import {store} from './data/store';
  import Card from './components/partials/Card.vue'
  

  export default {

    components:{
      Header,
      Main,
      Footer,
      Card

    },
   
    methods:{
      getApi(type){
        console.log(store.apiUrl + type)
        axios.get(store.apiUrl + type, {
          params: store.apiParams

        })
        .then( res => {
          console.log(res.data)
          store[type] = res.data.results;
          // cosi è come se facessi due chiamate separata unite in una 
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
  
  <Card type="movie"  /> 
  <Card type="tv" /> 


</template>


<style lang="scss" >
@import './assets/scss/main.scss';

</style>