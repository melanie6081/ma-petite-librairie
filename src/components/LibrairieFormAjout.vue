<script setup>
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/18/livres";

function handlerAdd(titreL, qtestockL, prixL) {
  console.log(titre);
  console.log(qtestock);
  console.log(prix);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titreL, qtestock: qtestockL, prix: prixL }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getListeLivre();
    })
    .catch((error) => console.log(error));
}
</script>

<template>
  <form @submit.prevent="handlerAdd(titreL, qtestockL, prixL)">
    <label for="titre">Titre : </label>
    <input
      id="titre"
      type="text"
      v-model="titreL"
      placeholder="titre du livre"
      required
    />
    <br />
    <label for="qtestock">Quantité : </label>
    <input
      id="qtestock"
      type="number"
      v-model="qtestockL"
      placeholder="livre(s) en stock"
      required
    />
    <br />
    <label for="prix">Prix : </label>
    <input
      id="prix"
      type="number"
      v-model="prixL"
      placeholder="prix du livre en €"
      required
    />
    <br />

    <input type="submit" value="Nouveau Livre" />
  </form>
</template>

<style scoped></style>
