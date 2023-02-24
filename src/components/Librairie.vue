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
const listeC = reactive([]);
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
      listeC.splice(0, listeC.length);
      dataJSON.forEach((l) =>
        listeC.push(new Livre(l.id, l.titre, l.qtestock, l.prix))
      );
    })
    .catch((error) => console.log(error));
}

function handlerDelete(livre) {
  console.log(livre);
  console.log("supprimons le livre d'id : ", livre._id);
  const fetchOptions = {
    method: "DELETE",
  };

  fetch(url + "/" + livre._id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      console.log("livre supprimé");
      getLivres();
    })
    .catch((error) => console.log(error));
}

function handler1Add(livre) {
  // -- ajouter un livre en quantité
  livre.add1();
  console.log(livre);
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id: livre._id,
      titre: livre._titre,
      qtestock: livre._qtestock,
      prix: livre._prix,
    }),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // actualiser la liste des choses
      getLivres();
    })
    .catch((error) => console.log(error));
}

function handler1Delete(livre) {
  if (livre._qtestock > 1) {
    // -- soustraire 1 de la quantité en stock
    livre.delete1();
    console.log(livre);
    // -- entête http pour la req AJAX
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // -- la chose modifiée est envoyé au serveur
    //  via le body de la req AJAX
    const fetchOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify({
        id: livre._id,
        titre: livre._titre,
        qtestock: livre._qtestock,
        prix: livre._prix,
      }),
    };
    // -- la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des choses
        getLivres();
      })
      .catch((error) => console.log(error));
  } else {
    handlerDelete(livre);
    getLivres();
  }
}

onMounted(() => {
  getLivres();
});
</script>

<template>
  <LibrairieListLivre
    v-for="livre of listeC"
    :key="livre.id"
    :livre="livre"
    :indexl="livre.id"
    @delete="handlerDelete"
    @delete1="handler1Delete"
    @add1="handler1Add"
  />
</template>

<style scoped></style>
