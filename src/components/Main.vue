<script>
import card from './partialss/card.vue';
import {store} from '../data/store'
export default {
  components:{
    card
  },
  data(){
    return{
      store
    }
  },
  computed:{
    title(){
      return this.type === 'movie'?'film':'serie TV'
    }
  }

}
</script>

<template>
  <div class=" container ">
    <div class=" row row-cols-3 mb-3  ">

      <card type="movie"
      
      />
      <card/>
      
    </div>

  </div>

</template>


<style lang="scss" scoped>

</style>