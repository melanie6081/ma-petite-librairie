<script setup>
// -- il faut déclarer les 2 params (props) du composant
defineProps(["livre"]);
// -- les 3 events émis par ce composant
defineEmits(["delete", "add1", "delete1"]);

// let tCouleurs = ["#ecedda", "#f1cdc2", "#d7c8b5", "#8dbdcb"];
</script>

<template>
  <li class="noliste">
    <p class="livre">
      {{ livre.pourAfficher() }}
    </p>
    <!-- au click sur le bouton, 
         on emet un événement dont on choisit le nom (ici deleteC)
         la fonction qui gèrera cet event aura en paramètre la valeur de index
    -->
    <br />
    <button @click="$emit('delete', livre)" id="suppr">Supprimer</button>
    <button @click="$emit('delete1', livre)" id="suppr1">-</button>
    <button @click="$emit('add1', livre)" id="ajout1">+</button>
  </li>
</template>

<style>
.livre {
  background: #ecedda;
  border-radius: 4px;
  width: 90px;
  height: 140px;
  vertical-align: top;
  margin: 10px 10px 10px 10px;
  text-align: center;
}

.noliste {
  list-style: none;
  display: inline-block;
}
</style>
