<template>
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
  <div class="pt-5 background">
    <h1 style="text-align: center; margin-bottom: 0%; color: white">Mix Result</h1>
  </div>
  <ResultComponents title="Before Mix" :music="origin_music" />
  <ResultComponents title="After Mix" :music="after_music" />
  <MainFooter />
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
import MainFooter from "../components/Main/MainFooter.vue";
import ResultComponents from "../components/Mixing/ResultComponents.vue";

const origin = history.state.origin;
const after = history.state.after;
const title = history.state.title;

const origin_music = {
  title: title,
  url: origin,
};

const after_music = {
  title: title,
  url: after,
};
</script>

<style scoped>
.background {
  background-color: #001b30;
}
</style>
