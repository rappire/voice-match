<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useWindowsWidth } from "../assets/js/useWindowsWidth";

// images
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";
import ArrDark from "@/assets/img/down-arrow-dark.svg";

const props = defineProps({
  isDark: {
    type: Boolean,
  },
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const scrollThreshold = 100; // 일정 스크롤 임계값 설정
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > scrollThreshold) {
    dark.value = true;
    transparent.value = false;
  } else {
    dark.value = false;
    transparent.value = true;
  }
};

let transparent = ref(true);
let dark = ref(false);

// set arrow  color
function getArrowColor() {
  return DownArrWhite;
}

// set text color
const getTextColor = () => {
  return "text-white";
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute': transparent && isDark,
      'navbar-dark z-index-3 background shadow-none': dark || !isDark,
    }"
    style="padding: 0 0"
  >
    <div class="container">
      <RouterLink class="navbar-brand d-none d-md-block" to="/" rel="tooltip" title="Voice Match" data-placement="bottom">
        <img v-if="transparent && isDark" src="@/assets/img/voice-match/voice_match_logo.png" style="width: 50%" alt="Voicematch 로고" />
        <img v-else src="@/assets/img/voice-match/voice_match_logo_white.png" style="width: 50%" alt="Voicematch 로고" />
        <!-- <h2 class="text-white font-weight-bolder ms-sm-3">Voice Match</h2> -->
      </RouterLink>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2 fs-3">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
              <div style="font-size: 1rem">Landing Pages</div>
              <img :src="DownArrWhite" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="DownArrWhite" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">Landing Pages</div>
                      <RouterLink :to="{ name: 'MainPage' }" class="dropdown-item border-radius-md">
                        <span>About Us</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'MainPage' }" class="dropdown-item border-radius-md">
                        <span>Contact Us</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">view_day</i>
              <div style="font-size: 1rem">Products</div>
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuBlocks"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Mastering</h6>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <!-- <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'page-headers' }"> Samples </RouterLink> -->
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'MasteringUpload' }"> Online Mastering </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Mixing</h6>
                            <span class="text-sm">We're preparing</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1 disabled" :to="{ name: 'MainPage' }"> Samples </RouterLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <!-- <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">article</i>
              <div style="font-size: 1rem">Docs</div>
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.google.com/">
                      <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Getting Started</h6>
                      <span class="text-sm">All about overview, quick start, license and contents</span>
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.google.com/">
                      <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Foundation</h6>
                      <span class="text-sm">See our colors, icons and typography</span>
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.google.com/">
                      <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Components</h6>
                      <span class="text-sm">Explore our collection of fully designed components</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.background {
  background-color: #001b30;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
