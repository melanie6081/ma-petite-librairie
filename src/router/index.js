import { createRouter, createWebHistory } from "vue-router";
import LibrairieView from "../views/LibrairieView.vue";
import ModifierView from "../views/ModifierView.vue";
import RechercheView from "../views/RechercheView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
      path: "/",
      name: "librairie",
      component: LibrairieView,
    },
    {
      path: "/modification",
      name: "modification",
      component: ModifierView,
    },
    {
      path: "/recherche",
      name: "recherche",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RechercheView,
    },
  ],
});

export default router;
