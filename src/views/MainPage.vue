<template>
  <div class="position-sticky z-index-sticky top-0">
    <Navbar :is-dark="true" dark />
  </div>

  <MainHeader />
  <div class="background">
    <MainBody />
  </div>
  <MainFooter />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import MainFooter from "../components/Main/MainFooter.vue";

import MainHeader from "../components/Main/MainHeader.vue";
import MainBody from "../components/Main/MainBody.vue";
</script>

<style scoped>
.background {
  background-color: #001b30;
}
</style>
