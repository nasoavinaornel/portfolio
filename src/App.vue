<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/projets">Projets</router-link></li>
        <li><router-link to="/cv">CV</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <router-view /> <!-- Ici les pages s’affichent -->
  </div>
</template>

<style>
nav {
  background: #1e1e1e;
  padding: 1rem;
}
nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
  justify-content: center;
}
nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>
