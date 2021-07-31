<template>
  <div class="img-grid">
    <div v-for="img in documents" :key="img.id" class="img-wrap">
      <img :src="img.url" />
    </div>
  </div>
</template>

<script>
import useCollection from "../composables/useFirestore";

export default {
  setup() {
    const { documents } = useCollection("images");
    return { documents };
  },
};
</script>

<style scoped>
.img-grid {
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
}

.img-wrap {
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 0.8;
}

.img-wrap img {
  min-width: 100%;
  min-height: 100%;
  max-width: 180%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>