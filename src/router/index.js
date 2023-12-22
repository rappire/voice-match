import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import MasteringUpload from "../views/MasteringUpload.vue";
import MasteringResult from "../views/MasteringResult.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/mastering/upload",
      name: "MasteringUpload",
      component: MasteringUpload,
    },
    {
      path: "/mastering/result",
      name: "MasteringResult",
      component: MasteringResult,
    },
  ],
});

export default router;
