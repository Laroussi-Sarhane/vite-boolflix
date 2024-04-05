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
  <div class=" container ">
    <div class=" row row-cols-3 mb-3  ">
      <h3>{{ title }}</h3>

      <Card v-for="card in store[type]"
       :key="card.id" 
       :cardObj="card"/>
      
      
    </div>

  </div>

</template>


<style lang="scss" scoped>

</style>