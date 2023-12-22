<script setup>
import logo from "@/assets/img/voice-match/voice_match_logo.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      logo: logo,
      route: "/",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
      },
    ],
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String,
    },
    default: () => [
      {
        name: "company",
        items: [
          {
            name: "about us",
            href: "https://www.creative-tim.com/presentation",
          },
        ],
      },
      {
        name: "mastering",
        items: [
          { name: "sample", href: "https://iradesign.io/" },
          {
            name: "online mixing",
            href: "https://www.creative-tim.com/bits",
          },
        ],
      },
      {
        name: "help & support",
        items: [
          {
            name: "contact us",
            href: "https://www.creative-tim.com/contact-us",
          },
        ],
      },
      {
        name: "legal",
        items: [
          {
            name: "licenses (EULA)",
            href: "https://www.creative-tim.com/license",
          },
        ],
      },
    ],
  },
});
</script>
<template>
  <footer class="footer pt-5" style="background-color: #001b30">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3" style="max-width: 10rem" alt="main_logo" />
            </a>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li class="nav-item" v-for="{ icon, link } of socials" :key="link">
                <a class="nav-link pe-1" :href="link" target="_blank" v-html="icon"> </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4" v-for="{ name, items } of menus" :key="name">
          <h6 class="text-sm text-white">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link text-white" :href="item.href" target="_blank">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-white my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              voice-match
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
