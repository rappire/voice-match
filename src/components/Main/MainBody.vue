<script setup>
import MainDemo from "./MainDemo.vue";
import MainService from "./MainService.vue";
import MainDemoButton from "./MainDemoButton.vue";
</script>

<template>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <MainDemo data-aos="fade-up" />
  </div>
  <MainService />
  <MainDemoButton />
</template>

<style scoped></style>
