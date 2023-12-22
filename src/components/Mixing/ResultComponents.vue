<template>
  <div class="background pt-7">
    <div class="card card-body shadow-xl mx-3 mx-md-10 mt-n6">
      <h1 class="text-black" style="text-align: center">{{ title }}</h1>
      <SoundPlayer class="fade-in" :src="music.url" :title="music.title"></SoundPlayer>
    </div>
  </div>
</template>

<script setup>
import SoundPlayer from "../../views/SoundPlayer.vue";

defineProps({
  title: {
    required: true,
    type: String,
  },
  music: {
    type: Object,
    required: true,
    title: String,
    url: String,
  },
});
</script>

<style></style>
