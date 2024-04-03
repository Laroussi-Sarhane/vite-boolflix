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
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        console.log( 'GET API');
        axios.get(this.store.apiUrl,{
          params:{
            query: 'ritorno+al+futuro',
            api_key: '1c5822408e689c2701a28f5b3356172c',
            language :'it-IT'
          }
        })
        .then(result=>{
          this.store.cardList = result.data.results;
          console.log(result.data.results);
        })
        .catch(error=>{
          console.log(error);
        })

      }
    },
    mounted(){
      this.getApi()
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