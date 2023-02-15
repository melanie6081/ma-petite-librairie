<script setup>
// -- import de la fonction permettant de déclarer
//   une variable comme une varianel d'ETAT
import { reactive, onMounted } from "vue";

// -- les sous composants utilisés

//import LibrairieForm from "./LibrairieForm.vue";
import LibrairieListLivre from "./LibrairieListLivre.vue";

// -- les classes utilisées
import Livre from "../Livre";
// -- la liste des livres --> dans le state
// --> donnée réactive = l'affichage sera actualisée
//      automatiquement à chaque changement dans la liste
//const listeC = reactive([new Chose("menage"), new Chose("Vaiselle")]);
const listeL = reactive([]);
//url API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/18/livres";

//les fonctions utiles
function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeL.splice(0, listeL.length);
      dataJSON.forEach((l) =>
        listeL.push(new Livre(l.titre, l.qtestock, l.prix))
      );
    })
    .catch((error) => console.log(error));
}
onMounted(() => {
  getLivres();
});
</script>

<template>
  <LibrairieListLivre
    v-for="(livre, index) of listeC"
    :key="index"
    :livre="livre"
  />
</template>

<style scoped></style>
