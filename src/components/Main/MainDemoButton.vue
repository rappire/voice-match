<template>
  <div class="card card-body mx-3 mx-md-4 mt-n6" style="background-size: cover" :style="{ backgroundImage: `url(${bg0})` }">
    <div class="page-header min-vh-75 container" data-aos="fade-up">
      <div style="text-align: center" class="row justify-content-center">
        <h1 style="color: wheat">MUSIC AT MUNUTE</h1>
        <h4 style="color: wheat">A few minutes for your music</h4>
        <h4 style="color: wheat">that artificial intelligence and people make together</h4>
        <button @click="moveMastering" type="submit" style="font-size: 20px; width: 20%; background-color: #001b30" class="btn text-white mt-5">
          Go Master
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import bg0 from "@/assets/img/voice-match/sound_knob.png";
import { useRouter } from "vue-router";

const router = useRouter();

const moveMastering = () => {
  router.push("/mastering/upload"); // 이동하고자 하는 내부 페이지의 경로를 설정해주세요
};
</script>

<style scoped></style>
