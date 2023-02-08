<script setup>
// -- il faut déclarer les 2 params (props) du composant
defineProps(["livre"]);
// -- les 2 events émis par ce composant
</script>

<template>
  <li>
    {{ livre.pourAfficher() }}
    <!-- au click sur le bouton, 
         on emet un événement dont on choisit le nom (ici deleteC)
         la fonction qui gèrera cet event aura en paramètre la valeur de index
    -->
  </li>
</template>

<style></style>
