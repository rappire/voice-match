<script setup>
import ButtonPlayerVue from "./ButtonPlayer.vue";

defineProps({
  image: {
    type: String,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
    title: String,
    artist: String,
  },
  music: {
    type: Object,
    required: true,
    noMix: String,
    mix: String,
  },
});
</script>

<template>
  <div class="card card-profile text-white" style="background-color: #467ebf; caret-color: transparent">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 mt-n3">
        <img class="w-100 border-radius-md shadow-lg" :src="image" :alt="profile.name" />
      </div>
      <div class="col-lg-8 col-md-6 col-12 my-auto">
        <div class="card-body ps-lg-0">
          <h5 class="mt-0 text-white">{{ profile.title }}</h5>
          <h6 class="text-black">{{ profile.artist }}</h6>
          <div class="row">
            <p class="col-lg-4 mb-0 text-white">
              BeFore Mix
              <ButtonPlayerVue :src="music.noMix" />
            </p>
            <p class="col-lg-4 mb-0 text-white">
              After Mix
              <ButtonPlayerVue :src="music.mix" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
