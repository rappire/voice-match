<template>
  <div class="upload-page">
    <h2 style="color: wheat">Online Mastering</h2>

    <div class="square drop-area-container">
      <span></span>
      <span></span>
      <span></span>
      <div
        class="drop-area"
        v-bind="getRootProps()"
        :class="{
          'file-over': isFileOver,
          'drag-active': isDragActive,
        }"
      >
        <input v-bind="getInputProps()" />
        <img class="avatar size" :src="upload" alt="alt" />
        <div v-if="!isFileOver">
          <div class="row">
            <h5>Mastering Music in Minutes</h5>
            <h6 style="color: wheat">Drag &amp; Drop</h6>
            <h6 class="mt-10">Only Audio file</h6>
          </div>
        </div>
        <div v-else>
          <h6 style="color: black">{{ fileName }}</h6>
          <h6 style="color: black">Drag &amp; Drop</h6>
          <h6 style="color: black" class="mt-8">You can change music file</h6>
        </div>
        <div class="border-rotation" v-if="isDragActive" :style="{ animationPlayState: isDragActive ? 'running' : 'paused' }"></div>
      </div>
    </div>
    <loading v-model:active="isLoading" :is-full-page="true" :height="128" :width="128" color="#fff" :enforce-focus="true">
      <div class="row justify-content-center">
        <span class="loader"></span>
      </div>
      <div class="row">
        <h1 class="typing-text">Now Mastering</h1>
      </div>
    </loading>
    <button @click="moveMastering" class="upload-button" :disabled="!isFileOver">Go Mixing</button>
  </div>
</template>

<script setup>
import { useDropzone } from "vue3-dropzone";
import { ref } from "vue";
import upload from "@/assets/img/voice-match/upload.png";

import { useRouter } from "vue-router";
import axios from "axios";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const router = useRouter();

const moveMastering = async () => {
  isLoading.value = true;
  const formData = new FormData();
  const config = {
    header: {
      "content-type": "multipart/form-data",
    },
  };
  formData.append("file", music_file.value);

  axios.defaults.baseURL = "http://158.179.193.90:8000/";
  let result = null;
  await axios.post("/mix", formData, config).then((res) => {
    result = res.data;
    isLoading.value = false;
  });

  router.push({
    name: "MasteringResult",
    state: {
      origin: `http://158.179.193.90:8000/download/music/${result.origin}`,
      after: `http://158.179.193.90:8000/download/music/${result.after_mix}`,
      title: fileName.value,
    },
  });
};

const isFileOver = ref(false);
const fileName = ref("");
const music_file = ref(null);
const isLoading = ref(false);

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
  onDrop: (acceptFiles, rejectReasons) => {
    if (acceptFiles.length != 0) {
      isFileOver.value = true;
      fileName.value = acceptFiles[0].name;
      music_file.value = acceptFiles[0];
    } else {
      alert(rejectReasons[0].errors[0].message);
    }
  },
  accept: "audio/*",
  multiple: false,
});
</script>

<style scoped>
.upload-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.drop-area-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.drop-area {
  width: 400px; /* 원하는 너비 값으로 수정해주세요 */
  height: 400px; /* 원하는 높이 값으로 수정해주세요 */
  border-radius: 50%;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease;
  position: relative;
  border: 2px dashed #ccc;
}

.file-over {
  color: black;
  background-color: #055694;
  border: 2px dashed #ccc;
}

.drag-active {
  border-color: transparent;
}

.border-rotation {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 2px dashed #ccc;
  animation: rotate 8s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.demo-message {
  margin-top: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.upload-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: rgb(0, 0, 0);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;
}
.upload-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.square {
  width: 400px;
  height: 400px;
  position: relative;
}
.square span {
  position: absolute;
  width: 800px;
  height: 800px;
  border: 1px solid #fff;
  border-radius: 40% 60% 65% 35% / 40% 50% 55% 60%;
  transition: 0.5s;
  animation: circle 5s linear infinite;
}

.square span:nth-child(1) {
  animation: circle 6s linear infinite;
}
.square span:nth-child(2) {
  animation: circle 4s linear infinite;
  animation-direction: reverse;
}
.square span:nth-child(3) {
  animation: circle 10s linear infinite;
}

.square:hover span:nth-child(1) {
  opacity: 0.3;
}

.square:hover span:nth-child(2) {
  opacity: 0.5;
}

.square:hover span:nth-child(3) {
  opacity: 0.8;
}

.square > div {
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}
@keyframes animloader {
  0% {
    border-color: white #055694 #055694 #055694;
  }
  33% {
    border-color: white white #055694 #055694;
  }
  66% {
    border-color: white white white #055694;
  }
  100% {
    border-color: white white white white;
  }
}

.typing-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(40) infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinking {
  50% {
    opacity: 0;
  }
}
</style>
