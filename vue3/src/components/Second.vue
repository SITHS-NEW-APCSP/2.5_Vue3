<template>
  <div>
      <p> click the button to change {{num}} to summin else </p>
      <button v-on:click="num += 1">Button</button>
      <p>This is a computed() property {{comp}}  (jajajaja)</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
    setup(){
        let num = ref(1);
        let comp = computed(() => Math.log(num.value));

        return {num, comp};
    }
}
</script>

<style>

</style>