<script setup>
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/18/livres";

//import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
//const titre = ref("");
// -- les events émis par le composant
//const emit = defineEmits(["addc"]);
// -- handler utile si on veut gérer le submit de cette manière
// <form @submit.prevent="handlerSubmit">
//function handlerSubmit() {}
// en dehors du template il faut se souvenir que libelle
// est un objet avec l'attribut value (créé par ref())
//emit("addc", titre.value);
//titre.value = "";
//}
//let formData = document.querySelector("#valeurs");
//formData.addEventListener("submit",)
const livre = reactive([]);

function handlerAdd(livre) {
  // -- il faut créer une nouvelle "chose" instance de la classe
  //let newLivre = new Livre(titre, qtestock, prix);
  console.log(livre);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ livre: livre }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}
</script>

<template>
  <!-- quand le formulaire est validé,
    on doit emmetre un event vers le composant parent 
    pour faire ressortir du composant 
    la valeur de la variable "libelle";
  -->

  <!-- 
       <form @submit.prevent="$emit(livre)">
      2ème syntaxe possible avec un handler
  <form @submit.prevent="handlerSubmit">
  -->
  <!-- la direective v-model permet de faire le lien bidirectionnel
         entre la variable et la zone de saisie ;
         si on modifie la var, la zone de saisie est modifié
         si on modifie la zone de saisir, la variable est modifié
         -->
  <form @submit.prevent="handlerAdd">
    <label for="titre">Titre : </label>
    <input
      id="titre"
      type="text"
      v-model="livre.titre"
      placeholder="titre du livre"
    />
    <br />
    <label for="qtestock">Quantité : </label>
    <input
      id="qtestock"
      type="number"
      v-model="livre.qtestock"
      placeholder="livre(s) en stock"
    />
    <br />
    <label for="prix">Prix : </label>
    <input
      id="prix"
      type="number"
      v-model="livre.prix"
      placeholder="prix du livre en €"
    />
    <br />
    <input type="submit" value="Nouveau Livre" />
  </form>
</template>

<style scoped></style>
