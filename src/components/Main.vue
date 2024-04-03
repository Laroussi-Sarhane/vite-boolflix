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
  }

}
</script>

<template>
  <div class=" container ">
    <div class=" row row-cols-3 mb-3  ">

      <card v-for="card in this.store.cardList" 
      :key="card.id"
      :title="card.title"
      :originalTitle="card.original_title" 
      :language="card.original_language" 
      :rate="card.vote_average"
      :image="card.backdrop_path"
      
      />
      
    </div>

  </div>

</template>


<style lang="scss" scoped>

</style>