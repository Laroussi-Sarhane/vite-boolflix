<script>
import {store} from '../data/store'
import Card from './partials/Card.vue'
export default {
  props:{
    type: String
   
  },
  data(){
    return{
      store
      

    }
  },
  components:{
    Card
  },
  computed:{
    title(){
      return this.type === 'movie' ? 'film' : 'serie TV'
    }
  }

}
</script>

<template>
  <main>
    <div class="my_cont container ">
      <div class=" row d-flex mb-3 m-3  flex-wrap   ">
        <h3>{{ title }}</h3>
  
        <Card v-for="card in store[type]"
         :key="card.id" 
         :cardObj="card"/>
        
        
      </div>
  
    </div>

  </main>

</template>


<style lang="scss" scoped>
main{
  background-color: rgb(50, 48, 48);
  height: 100vh;

}

</style>