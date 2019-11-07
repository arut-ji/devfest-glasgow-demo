<template>
  <div class="title-container">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "title-box",
  props: {
    text: String
  }
};
</script>

<style scoped>
.title-container {
  color: white;
  font-size: 1.5rem;
}
</style>
