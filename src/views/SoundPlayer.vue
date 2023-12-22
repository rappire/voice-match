<template>
  <main class="container">
    <div class="audio-player">
      <button id="playButton" class="play-button" @click="togglePlay">
        <img id="playButtonIcon" class="play-button-icon" :src="getImageUrl(playIcon)" alt="Play Button" />
      </button>
      <div class="player-body">
        <p class="title">{{ props.title }}</p>
        <div ref="waveform" class="waveform"></div>
        <div class="controls">
          <div class="volume">
            <img id="volumeIcon" class="volume-icon" :src="getImageUrl(volumeIcon)" alt="Volume" @click="toggleMute" />
            <input
              id="volumeSlider"
              class="volume-slider"
              type="range"
              name="volume-slider"
              min="0"
              max="100"
              v-model="volume"
              @input="handleVolumeChange"
              :disabled="isMuted"
            />
          </div>
          <div class="timecode">
            <span id="currentTime">{{ nowTime }}</span>
            <span>/</span>
            <span>{{ totalDuration }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import WaveSurfer from "wavesurfer.js";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// Define the waveform gradient
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
gradient.addColorStop(0, "#656666"); // Top color
gradient.addColorStop((canvas.height * 0.7) / canvas.height, "#656666"); // Top color
gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, "#ffffff"); // White line
gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, "#ffffff"); // White line
gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, "#B1B1B1"); // Bottom color
gradient.addColorStop(1, "#B1B1B1"); // Bottom color

// Define the progress gradient
const progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
progressGradient.addColorStop(0, "#EE772F"); // Top color
progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, "#EB4926"); // Top color
progressGradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, "#ffffff"); // White line
progressGradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, "#ffffff"); // White line
progressGradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, "#F6B094"); // Bottom color
progressGradient.addColorStop(1, "#F6B094"); // Bottom color

let wavesurfer;
const totalDuration = ref();
const nowTime = ref("00:00:00");
const volume = ref(50);
const playIcon = ref("play");
const volumeIcon = ref("volume");
const isMuted = ref(false);
const waveform = ref(null);

watch(
  () => props.src,
  (cur, prev) => {
    wavesurfer.load(cur);
  }
);

const initializeWavesurfer = () => {
  return WaveSurfer.create({
    container: waveform.value,
    responsive: true,
    height: 80,
    cursorColor: "black",
    waveColor: gradient,
    progressColor: progressGradient,
    barWidth: 2,
    // waveColor: "#ff5501",
    // progressColor: "#d44700",
    backend: "MediaElement",
    scrollParent: true,
    xhr: {
      mode: "no-cors",
    },
  });
};

onMounted(() => {
  wavesurfer = initializeWavesurfer();
  if (props.src !== "") {
    wavesurfer.load(props.src);
  }

  wavesurfer.on("ready", () => {
    setVolumeFromLocalStorage();
    wavesurfer.setVolume(volume.value / 100);
    totalDuration.value = formatTimecode(wavesurfer.getDuration());
  });

  wavesurfer.on("audioprocess", () => {
    nowTime.value = formatTimecode(wavesurfer.getCurrentTime());
  });

  wavesurfer.on("finish", () => {
    playIcon.value = "play";
  });
});

const formatTimecode = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

const togglePlay = () => {
  wavesurfer.playPause();
  const isPlaying = wavesurfer.isPlaying();
  if (isPlaying) {
    playIcon.value = "pause";
  } else {
    playIcon.value = "play";
  }
};

const toggleMute = () => {
  isMuted.value = !isMuted.value;
  wavesurfer.setMuted(isMuted.value);
  if (isMuted.value) {
    volumeIcon.value = "mute";
  } else {
    volumeIcon.value = "volume";
  }
};

const setVolumeFromLocalStorage = () => {
  volume.value = localStorage.getItem("audio-player-volume") || 50;
};

const handleVolumeChange = () => {
  wavesurfer.setVolume(volume.value / 100);
  localStorage.setItem("audio-player-volume", volume.value);
};

const getImageUrl = (name) => {
  return new URL(`../assets/img/music-player/${name}.svg`, import.meta.url).href;
};
</script>

<style scoped>
/* Main styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: rgb(24, 24, 24);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* background-color: rgb(221, 221, 221); */
}
/* Audio player */
.audio-player {
  width: 100%;
  max-width: 100rem;
  display: flex;
  margin: 2rem 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 1rem 0.2rem rgb(201, 201, 201);
}
/* Play button */
.play-button {
  min-width: 13rem;
  min-height: 13rem;
  /* Reset default button styles */
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
/* Main player body, which includes title, waveform, volume and timecode */
.player-body {
  width: 100%;
  padding: 1rem;
}
/* Audio track title */
.title {
  width: 100%;
  font-weight: 600;
}
/* Main waveform */
.waveform {
  width: 100%;
  min-height: 8rem;
  padding: 0.5rem 0;
}
/* Controls include volume mute/unmute, volume slider and timecode */
.controls {
  display: flex;
  justify-content: space-between;
}
/* Timecode */
.timecode {
  color: rgb(75, 75, 75);
}
/* Volume */
.volume {
  display: flex;
  align-items: center;
}
.volume-icon {
  cursor: pointer;
}
.volume-slider {
  margin: 0 1rem;
  cursor: pointer;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
  background: transparent;
  caret-color: transparent;
}

/* Custom volume slider */
.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 1rem;
  width: 1rem;
  border: none;
  border-radius: 50%;
  background: rgb(255, 85, 1);
  margin-top: -0.4rem;
}
.volume-slider::-moz-range-thumb {
  -webkit-appearance: none;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  border-radius: 50%;
  background: rgb(255, 85, 1);
}
.volume-slider::-ms-thumb {
  -webkit-appearance: none;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  border-radius: 50%;
  background: rgb(255, 85, 1);
}
.volume-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  background-color: rgb(75, 75, 75);
  border-radius: 1rem;
}
.volume-slider::-ms-track {
  background: transparent;
  border-color: transparent;
  color: transparent;
  width: 100%;
  height: 0.25rem;
  background-color: rgb(75, 75, 75);
  border-radius: 1rem;
}
/* Muted/disabled volume slider */
.volume-slider[disabled] {
  cursor: not-allowed;
}
.volume-slider[disabled]::-webkit-slider-thumb {
  background-color: rgb(175, 175, 175);
}
.volume-slider[disabled]::-moz-range-thumb {
  background-color: rgb(175, 175, 175);
}
.volume-slider[disabled]::-ms-thumb {
  background-color: rgb(175, 175, 175);
}
.volume-slider[disabled]::-webkit-slider-runnable-track {
  background-color: rgb(175, 175, 175);
}
.volume-slider[disabled]::-ms-track {
  background-color: rgb(175, 175, 175);
}
</style>
