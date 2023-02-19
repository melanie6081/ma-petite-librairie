<script setup>
import Librairie from "../components/Librairie.vue";
</script>

<template>
  <main>
    <div id="collection">
      <h2>Mes Livres</h2>
    </div>
    <div id="librairie">
      <Librairie />
    </div>
  </main>
</template>

<style scoped>
h2 {
  color: #40639d;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-style: italic;
}

main {
  margin: 10px 0px 0px;
}
</style>
