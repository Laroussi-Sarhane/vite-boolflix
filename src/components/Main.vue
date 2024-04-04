<script>
import Card from './partialss/Card.vue';
import {store} from '../data/store'
export default {
  props:{
    type: String
  },
  components:{
    Card
  },
  data(){
    return{
      store
    }
  },
  computed:{
    title(){
      return this.type === 'movie'? 'film': 'serie TV'
    }
  }

}
</script>

<template>
  <div class=" container ">
    <div class=" row row-cols-3 mb-3  ">
      <h3>{{ title }}</h3>

      <Card v-for="item in store[type]" :key="item.id"/>
      <Card/>
      
    </div>

  </div>

</template>


<style lang="scss" scoped>

</style>