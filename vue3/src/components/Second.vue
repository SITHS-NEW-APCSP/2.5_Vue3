<template>
  <div>
      <p>{{injval1}}</p>
      <p>{{injval2}}</p>
  </div>
</template>

<script>
import { inject} from "vue";
export default {
    setup(){
       const injval1 = inject('injval_def', 'this is the defaulkt value of injection');
       const injval2 = inject('injval');

       return {injval1, injval2};
    }
}
</script>

<style>

</style>