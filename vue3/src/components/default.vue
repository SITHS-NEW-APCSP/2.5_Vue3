<template>
  <div>
    <div >
      <h1>This is the #default component</h1>
    </div>
  </div>
</template>

<script>
    
    export default {
        name: "Default",
        async setup(){
            await new Promise(resolve => setTimeout(resolve, 3000));                    // <-- used to slow the load of componet so we can see Suspense in action
        },                
    }

</script>