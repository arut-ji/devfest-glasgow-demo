<template>
  <div class="home__container">
    <title-box text="Built and Deployed with Cloud Build and Firebase Hosting" />
    <div class="home__icons-container">
      <cloud-build-icon/>
      <firebase-hosting-icon/>
    </div>
  </div>
</template>

<script lang="ts">
import TitleBox from "@/components/TitleBox.vue";
import CloudBuildIcon from "@/components/CloudBuildIcon.vue";
import FirebaseHostingIcon from "@/components/FirebaseHostingIcon.vue";

export default {
  name: "home",
  components: {
    TitleBox,
    CloudBuildIcon,
    FirebaseHostingIcon
  }
};
</script>

<style scoped>
.home__container {
  background-color: #1a73e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
}

.home__icons-container > svg {
  padding: 0px 5rem;
}
</style>