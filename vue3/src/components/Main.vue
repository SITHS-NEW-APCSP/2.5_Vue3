<template>
  <div>
      <Sec />
  </div>
</template>

<script>
import { ref, provide } from "vue";
import Sec from './Second.vue';
export default {
    components:{
        Sec,
    },
    setup(){
        let twth =  ref(23);
        
        provide('injval', `twenty three : ${twth.value}`);

    },

}
</script>
    
  
<style>

</style>