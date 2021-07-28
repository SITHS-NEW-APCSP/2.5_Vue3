<template>
   <div>
    <Suspense>
        <template #default>
            <Default />
        </template>
      
        <template #fallback>
            <h1>bruh...</h1>
        </template>
        
    </Suspense>
    
  </div>
</template>

<script>
import Default from "./default.vue";
export default {
    setup(){
        
    },
    components:{
        Default
    }

}
</script>
    
  
<style>

</style>