<template>
  <div ref="wavesurferMain"></div>
</template>

<script setup>
import WaveSurfer from "wavesurfer.js";
import { ref, onMounted } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  options: {
    type: Object,
  },
});

const wavesurferMain = ref(null);
const waveSurfer = ref(null);

onMounted(() => {
  let options = props.options;
  let wsOptions = Object.assign(
    {
      container: wavesurferMain.value,
    },
    options
  );

  waveSurfer.value = WaveSurfer.create(wsOptions);
  waveSurfer.value.load(props.src);
});
</script>
