<script setup>
import DemoCard from "@/components/Main/DemoCard.vue";

import daddy from "@/assets/img/voice-match/demo/daddy-sang-bass.jpg";
import daddyMix from "@/assets/music/demo/daddy-mix.wav";
import daddyNoMix from "@/assets/music/demo/daddy.wav";

import dynamite from "@/assets/img/voice-match/demo/dynamite.png";
import dynamiteMix from "@/assets/music/demo/dynamite-mix.wav";
import dynamiteNoMix from "@/assets/music/demo/dynamite.wav";

import enterSandman from "@/assets/img/voice-match/demo/enter-sandman.jpg";
import enterSandmanMix from "@/assets/music/demo/enter-sandman-mix.wav";
import enterSandmanNoMix from "@/assets/music/demo/enter-sandman.wav";

import overTheRainbow from "@/assets/img/voice-match/demo/over-the-rainbow.jpg";
import overTheRainbowMix from "@/assets/music/demo/over-the-rainbow-mix.wav";
import overTheRainbowNoMix from "@/assets/music/demo/over-the-rainbow.wav";
</script>

<template>
  <section class="pb-5 position-relative background2 mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h2 class="text-black z-index-1 position-relative">Demo</h2>
          <h3 class="text-black opacity-8 mb-0">You can compare before and after</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <DemoCard class="mt-4" :image="daddy" :profile="{ title: 'Daddy Sang Bass', artist: 'Johnny Cash' }" :music="{ mix: daddyMix, noMix: daddyNoMix }" />
        </div>
        <div class="col-lg-6 col-12">
          <DemoCard
            class="mt-4"
            :image="overTheRainbow"
            :profile="{ title: 'Over the RainBow', artist: 'Frank Sinatra' }"
            :music="{ mix: overTheRainbowMix, noMix: overTheRainbowNoMix }"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <DemoCard
            class="mt-4"
            :image="enterSandman"
            :profile="{ title: 'Enter Sandman', artist: 'Metallica' }"
            :music="{ mix: enterSandmanMix, noMix: enterSandmanNoMix }"
          />
        </div>
        <div class="col-lg-6 col-12">
          <DemoCard class="mt-4" :image="dynamite" :profile="{ title: 'Dynamite', artist: 'BTS' }" :music="{ mix: dynamiteMix, noMix: dynamiteNoMix }" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background2 {
  background-color: #fafcfd;
}
</style>
