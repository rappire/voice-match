<template>
  <div class="">
    <div class="page-header min-vh-75" :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white col fade-in-1s">음악으로 <span class="text-white" id="typed"></span> 바꿉니다</h1>
            <div id="typed-strings">
              <h1 v-for="item in list">{{ item }}</h1>
            </div>
            <div class="fade-in-2s">
              <p class="lead mb-4 text-white opacity-8">Voice Match</p>
              <h6 class="text-white mb-2 mt-5">Find us on</h6>
              <div class="d-flex justify-content-center">
                <a href="https://www.facebook.com/?locale=ko_KR"><i class="fab fa-facebook text-lg text-white me-4"></i></a>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram text-lg text-white me-4"></i></a>
                <a href="https://twitter.com/?lang=ko"><i class="fab fa-twitter text-lg text-white me-4"></i></a>
                <a href="https://www.google.com/"><i class="fab fa-google-plus text-lg text-white"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Typed from "typed.js";

import bg0 from "@/assets/img/voice-match/main-page.png";

const body = document.getElementsByTagName("body")[0];

const list = ["세상을", "가치를"];

onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>

<style scoped>
.fade-in-1s {
  opacity: 0;
  transform: translateY(50px);
  animation: fade-in 1s forwards;
}

.fade-in-2s {
  opacity: 0;
  transform: translateY(50px);
  animation: fade-in 2s forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
