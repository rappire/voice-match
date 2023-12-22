<script setup>
import mixing from "@/assets/img/voice-match/mixing.jpg";
import vocal from "@/assets/img/voice-match/vocal2.jpg";
import general from "@/assets/img/voice-match/general.jpg";
</script>

<template>
  <section class="pb-7 pt-7 position-relative background">
    <div class="container text-white background">
      <h2 class="text-light" style="text-align: center">“No1. Real-time AI music post-production tool Vemmx.”</h2>
      <div class="row mt-5 text-center">
        <div class="col-sm">
          <div class="row-sm">
            <img data-aos="fade-up" class="avatar size" :src="mixing" alt="alt" />
            <h3 class="text-light">Mixing / Mastering</h3>
            <p style="text-align: left; padding-left: 2rem">
              For Musicians<br />
              – professionals, amateurs, students
            </p>
          </div>
        </div>
        <div class="col-sm">
          <div class="row-sm">
            <img data-aos="fade-up" class="avatar size" :src="vocal" alt="alt" />
            <h3 class="text-light">Vocal Editing</h3>
            <p style="text-align: left; padding-left: 2rem">
              For Musicians<br />
              – professionals, amateurs, students
            </p>
          </div>
        </div>
        <div class="col-sm">
          <div class="row-sm">
            <img data-aos="fade-up" class="avatar size" :src="general" alt="alt" />
            <h3 class="text-light">General Editing for Broadcasting</h3>
            <p style="text-align: left; padding-left: 2rem">For Professional production / youtuber etc.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.size {
  width: 200px;
  height: 200px;
}

.background {
  background-color: #001b30;
}
</style>
