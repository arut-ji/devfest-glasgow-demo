<template>
  <div id="app">
    <h1 class="app__title">
        Built with Cloud Build and Deployed with Cloud Run
    </h1>
    <div class="app__icons-container">
      <cloud-build-icon></cloud-build-icon>
      <cloud-run-icon></cloud-run-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CloudBuildIcon from "./components/CloudBuildIcon.vue";
import CloudRunIcon from "./components/CloudRunIcon.vue";

export default Vue.extend({
  name: "app",
  components: {
    CloudBuildIcon,
    CloudRunIcon
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  background-color: #3173E8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.app__title {
  font-size: 5rem;
}

.app__icons-container > svg{
  margin: 0 3rem;
}

</style>
