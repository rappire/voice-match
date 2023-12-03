<template>
  <DefaultNavbar
    :action="{
      route: 'javascript:;',
      label: 'Buy Now',
      color: 'btn-white',
    }"
    transparent
  />
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-75" :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white col">음악으로 <span class="text-white" id="typed"></span> 바꿉니다</h1>
            <div id="typed-strings">
              <h1>세상을</h1>
              <h1>가치를</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">Voice Match</p>
            <button type="submit" class="btn bg-white text-dark">Register</button>
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
  </header>
  <button @click="playAudioA">음악 A 재생</button>
  <button @click="playAudioB">음악 B 재생</button>
  <button @click="stopAudio">음악 정지</button>
  <!-- <div class="bg-gradient-dark">
    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
      <AboutTeam />
      <Featuring />
      <Newsletter />
    </div>
  </div>
  <DefaultFooter /> -->
</template>

<script>
import DefaultNavbar from "../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../examples/footers/FooterDefault.vue";

import Featuring from "./LandingPages/AboutUs/Sections/AboutFeaturing.vue";
import AboutTeam from "./LandingPages/AboutUs/Sections/AboutTeam.vue";
import Newsletter from "./LandingPages/AboutUs/Sections/AboutNewsletter.vue";

import { onMounted, onUnmounted, ref } from "vue";
import Typed from "typed.js";
import { Howl, Howler } from "howler";

import bg0 from "@/assets/img/voice-match/records.jpg";

export default {
  name: "TestPage",

  components: {
    DefaultNavbar,
  },

  setup() {
    const body = document.getElementsByTagName("body")[0];

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

    let currentAudio = null;
    let isPlaying = false;
    let nowTime = 0;

    const playAudioA = () => {
      if (isPlaying) {
        nowTime = currentAudio.seek();
        currentAudio.unload();
      } else {
        nowTime = 0;
      }

      currentAudio = new Howl({
        src: ["music/no_mix.mp3"],
        html5: true,
      });

      currentAudio.seek(nowTime);
      currentAudio.play();
      isPlaying = true;
    };

    const playAudioB = () => {
      if (isPlaying) {
        nowTime = currentAudio.seek();
        currentAudio.unload();
      } else {
        nowTime = 0;
      }

      currentAudio = new Howl({
        src: ["music/mix.mp3"],
        html5: true,
      });

      currentAudio.seek(nowTime);
      currentAudio.play();
      isPlaying = true;
    };

    const stopAudio = () => {
      if (isPlaying) {
        currentAudio.unload();
        console.log(currentAudio);
        isPlaying = false;
      }
    };

    return {
      playAudioA,
      playAudioB,
      stopAudio,
      bg0,
    };

    // const audio = ref(null);
    // const isPlaying = ref(false);

    // const playAudio = () => {
    //   if (isPlaying.value) {
    //     return;
    //   }
    //   if (audio.value) {
    //     audio.value.play();
    //     isPlaying.value = true;
    //   } else {
    //     const player = new Howl({
    //       src: ["music/mix.mp3"],
    //       html5: true,
    //     });

    //     player.play();

    //     player.on("end", () => {
    //       isPlaying.value = false;
    //     });

    //     audio.value = player;
    //     isPlaying.value = true;
    //   }
    // };

    // const stopAudio = () => {
    //   if (audio.value) {
    //     audio.value.stop();
    //     isPlaying.value = false;
    //   }
    // };

    // return {
    //   audio,
    //   isPlaying,
    //   playAudio,
    //   stopAudio,
    //   changeAudio,
    //   bg0,
    // };
  },
};

// onMounted(() => {
//   body.classList.add("about-us");
//   body.classList.add("bg-gray-200");

//   if (document.getElementById("typed")) {
//     // eslint-disable-next-line no-unused-vars
//     var typed = new Typed("#typed", {
//       stringsElement: "#typed-strings",
//       typeSpeed: 200,
//       backSpeed: 200,
//       backDelay: 200,
//       startDelay: 500,
//       loop: true,
//     });
//   }
// });

// onUnmounted(() => {
//   body.classList.remove("about-us");
//   body.classList.remove("bg-gray-200");
// });
</script>

<style></style>
