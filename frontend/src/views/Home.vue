<template>
  <div class="home__container">
    <div class="home__title-box">
      <title-box
        text="Built and Deployed with Cloud Build and Cloud Run"
      />
    </div>
    <div class="home__icons-container">
      <cloud-build-icon />
      <cloud-run-icon />
    </div>
  </div>
</template>

<script lang="ts">
import TitleBox from "@/components/TitleBox.vue";
import CloudBuildIcon from "@/components/CloudBuildIcon.vue";
import FirebaseHostingIcon from "@/components/FirebaseHostingIcon.vue";
import CloudRunIcon from "@/components/CloudRunIcon.vue";

export default {
  name: "home",
  components: {
    TitleBox,
    CloudBuildIcon,
    CloudRunIcon
  }
};
</script>

<style scoped>
.home__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home__title-box {
  margin: 3rem 0;
}
.home__icons-container > svg {
  padding: 0 5rem;
}
</style>
