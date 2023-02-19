<script setup>
import LibrairieFormAjout from "../components/LibrairieFormAjout.vue";
</script>

<template>
  <main>
    <div id="ajout">
      <h2>Ajouter un livre</h2>
      <LibrairieFormAjout />
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
