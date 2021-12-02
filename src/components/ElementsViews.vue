<template>
  <div id="element">
    <div class="container">
        <div class="input-group flex-nowrap d-flex mt-5">
    <span class="input-group-text" id="addon-wrapping">@</span>
     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
    </div>
    </div>
  <Searchinfo  :word="word"/>

  </div>
</template>

<script>
import Searchinfo from './Searchinfo'

export default {
    name: 'ElementsViews',
    components:{
        Searchinfo,
    
    },
    // props:{
    //     word: String
    // },
    data(){
        return{
            word: ''
        }
    }
}
</script>

<style>

</style>