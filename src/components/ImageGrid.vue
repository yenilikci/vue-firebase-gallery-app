<template>
  <div>
    {{ documents }}
  </div>
</template>

<script>
import useCollection from "../composables/useFirestore";

export default {
  setup(){
    const {documents} = useCollection('images');
    return {documents};
  }
};
</script>

<style scoped>
</style>