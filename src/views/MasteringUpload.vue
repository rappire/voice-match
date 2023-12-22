<template>
  <div>
    <div class="position-sticky z-index-sticky top-0">
      <Navbar
        :action="{
          route: 'javascript:;',
          label: 'Buy Now',
          color: 'btn-white',
        }"
        dark
      />
    </div>
    <div class="background" style="height: 100vh">
      <div style="height: 20vh"></div>
      <MixingUpload />
    </div>
    <MainFooter />
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
import MainFooter from "../components/Main/MainFooter.vue";

import SoundPlayer from "./SoundPlayer.vue";
import MixingUpload from "../components/Mixing/MixingUpload.vue";
</script>

<style scoped>
.background {
  background-color: #001b30;
}
</style>
