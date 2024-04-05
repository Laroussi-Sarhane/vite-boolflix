  <script>
  export default {
    props:{
     cardObj: Object,
    },
    mounted(){
      console.log(this.cardObj)
    },
    
    
  }
  const baseURL = "https://image.tmdb.org/t/p";
  const posterPath = "AkmUoSHkxW9txpzZ52gCcWweEkE.jpg";
  const posterURL = baseURL + "w500" + posterPath; 
  console.log(posterURL)

  </script>

<template>
  <div class=" col  container  my-4 ">
    <div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="title">
  <div class="card-body">
    <h5 class="card-title">{{ cardObj.title }}  {{ cardObj.name }}</h5>
    <p class="card-text">{{ cardObj.original_title }} {{ cardObj.original_name }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ cardObj.original_language }}</li>
    <li class="list-group-item"> {{ cardObj.vote_average }}</li>
    <li class="list-group-item"> </li>
  </ul>
  
</div>
</div>
  
</template>


<style>

</style>