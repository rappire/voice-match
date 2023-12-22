<template>
  <div>
    <div id="waveform" class="show-none" ref="waveform"></div>
    <button id="playButton" class="play-button" @click="togglePlay">
      <img id="playButtonIcon" class="play-button-icon" :src="getImageUrl(playIcon)" alt="Play Button" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import WaveSurfer from "wavesurfer.js";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const playIcon = ref("play");
const waveform = ref(null);
let waveSurfer = null;

onMounted(() => {
  waveSurfer = WaveSurfer.create({
    container: waveform.value,
  });

  waveSurfer.on("finish", () => {
    playIcon.value = "play";
  });
});

const togglePlay = () => {
  if (!waveSurfer.getCurrentTime()) {
    waveSurfer.load(props.src);
    waveSurfer.on("ready", function () {
      waveSurfer.play();
      playIcon.value = "pause";
    });
  } else {
    waveSurfer.playPause();
    const isPlaying = waveSurfer.isPlaying();
    if (isPlaying) {
      playIcon.value = "pause";
    } else {
      playIcon.value = "play";
    }
  }
};

const getImageUrl = (name) => {
  return new URL(`../../assets/img/music-player/${name}.svg`, import.meta.url).href;
};
</script>

<style scoped>
.show-none {
  display: none;
}

.play-button {
  /* Reset default button styles */
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
</style>
