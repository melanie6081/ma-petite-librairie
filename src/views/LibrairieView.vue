<script setup>
import LibrairieHeader from "../components/LibrairieHeader.vue";
import Librairie from "../components/Librairie.vue";
</script>

<template>
  <main>
    <div>
      <h1><LibrairieHeader /></h1>
    </div>
    <div>
      <Librairie />
    </div>
  </main>
</template>

<style scoped>
h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: xx-large;
  font-style: oblique;
}
</style>
