  <script>
  export default {
    props:{
     type:String,
     title:String,
     original_title:String,
     language:String,
     vote:String,
     cardObj:Object
    }
  
  }
  </script>

<template>
  <div class=" col ">
    <div class="card" style="width: 18rem;">
  <img :src="image" class="card-img-top" :alt="title">
  <div class="card-body">
    <h5 class="card-title">{{title }}</h5>
    <p class="card-text">{{ language}}.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ vote_average}}</li>
    <li class="list-group-item">{{ vote }}</li>
    <li class="list-group-item"></li>
  </ul>
  
</div>
</div>
  
</template>


<style>

</style>