import { createRouter, createWebHistory } from "vue-router";
import LibrairieView from "../views/LibrairieView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
      path: "/",
      name: "librairie",
      component: LibrairieView,
    },
  ],
});

export default router;
