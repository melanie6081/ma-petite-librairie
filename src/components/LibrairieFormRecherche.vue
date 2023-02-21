<script setup>
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/18/livres";

function chercherLivre(titreL) {
  console.log(titreL);
  const fetchOptions = { method: "GET" };
  document.getElementById("resultat").innerHTML = "";
  fetch(url + "?search=" + titreL, fetchOptions)
    .then((response) => {
      console.log("test");
      return response.json();
    })
    .then((dataJSON) => {
      console.log("retour");
      console.log(dataJSON);
      let livres = dataJSON;
      document.getElementById("resultat").innerHTML += "<ul>";
      for (let l of livres) {
        document.getElementById("resultat").innerHTML +=
          "<li>" +
          l.titre +
          " (" +
          l.qtestock +
          " exemplaires en stock| " +
          l.prix +
          " €)" +
          "</li>";
      }
      document.getElementById("resultat").innerHTML += "</ul>";
    })
    .catch((error) => console.log(error));
}
</script>

<template>
  <form @submit.prevent="chercherLivre(titreL)">
    <label for="titre">Titre : </label>
    <input
      id="titre"
      type="text"
      v-model="titreL"
      placeholder="titre du livre recherché"
      required
    />
    <br />
    <input type="submit" value="Rechercher" />
  </form>
  <h2>Résultats</h2>
  <p id="resultat"></p>
</template>

<style scoped></style>
