<template>
  <div>
      <p> click the button to change {{num}} to summin else </p>
      <button v-on:click="num += 1">Button</button>
      <p>This is a computed() property {{comp}} </p>
      <p>open console to see watchEffect() in action</p>
  </div>
</template>

<script>
import { ref, computed, watchEffect} from "vue";
export default {
    setup(){
        let num = ref(1);
        let comp = computed(() => Math.log(num.value));
        watchEffect(() => {
            console.log(`This is a simple method to watch for ANY state cange. Current num val ${num.value}, current comp val ${comp.value}`);
        });
        return {num, comp};
    }
}
</script>

<style>

</style>