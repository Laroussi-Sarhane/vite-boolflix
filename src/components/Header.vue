<script>
import {store} from '../data/store'
export default {
data(){
  return{
    store
  }
}
}
</script>
<template>

  <header>
    <div class="container d-flex justify-content-between py-3 ">

      <div class=" text-white ">
        <p class="my_logo">BOOLFIX</p>
      </div>

      <div class=" my-2">
        <div class="input-group mb-4">
          <input type="text" class="form-control" placeholder="cerca il tuo film" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-danger" type="cerca" id="button-addon2">cerca</button>
        </div>
      </div>

    </div>
  </header>

</template>


<style lang="scss" scoped>
header{ 
  height: 90px;
  background-color: black;

}
.my_logo{
  font-size: 35px;
  color: red;
  font-weight: 600;
}

</style>