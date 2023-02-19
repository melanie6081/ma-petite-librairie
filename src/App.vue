<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo_MaPetiteLibrairie.png"
      width="100"
      height="100"
    />

    <h1>Ma petite Librairie</h1>

    <div class="wrapper">
      <nav>
        <!-- RouterLink : des liens qui pointent vers le composant à afficher -->
        <!-- Voir la configuration des liens dans router/index.js -->
        <RouterLink to="/">Librairie</RouterLink>
        <RouterLink to="/modification">Modification</RouterLink>
        <RouterLink to="/recherche">Recherche</RouterLink>
      </nav>
    </div>
  </header>
  <!-- RouterView : Le composant sélectionné s'affiche ici -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 0 auto auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #f1cdc2;
}

nav a.router-link-exact-active:hover {
  background-color: darkred;
  opacity: 0.3;
}

nav a:hover {
  background-color: darkcyan;
  opacity: 0.3;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: #8dbdcb;
}

nav a:first-of-type {
  border: 0;
}

h1 {
  color: #40639d;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-style: italic;
  margin-top: 5px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
