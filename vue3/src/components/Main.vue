<template>
  <div>
      <bruh>bruh level : {{b_lev}}</bruh>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup(){
        const b_lev = ref('bruh');
        return { b_lev };
    }

}
</script>
    
  
<style>

</style>