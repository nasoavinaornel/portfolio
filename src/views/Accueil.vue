<template>
  <div class="accueil">
    <!-- Phrase de bienvenue -->
    <p class="bienvenue">
      Bienvenue sur mon portfolio — un aperçu de mon univers entre développement, réseaux et cybersécurité.
    </p>

    <!-- Section Héro -->
    <section class="hero-section">
      <h1 class="hero-text">
        Je suis <span class="nom">Nasoavina Ornel</span><br>
        Développeur & Administrateur Réseaux
      </h1>
    </section>

    <!-- Présentation -->
    <section class="intro-section">
      <div class="card">
        <p>
          Étudiant en 2ᵉ année de Licence Informatique à l’<b>ENI</b>, je m’intéresse
          particulièrement à la programmation, aux réseaux et à la cybersécurité.
          Passionné par les systèmes, je cherche un stage pratique pour mettre mes
          compétences en action et apprendre au contact du monde professionnel.
        </p>
      </div>
    </section>

    <!-- Citation motivante -->
    <section class="citation-section">
      <p class="citation-text">
        "La meilleure façon de prédire l'avenir est de le créer."
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AccueilPage',
}
</script>

<style scoped>
/* Général */
.accueil {
  text-align: center;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #333;
  background: #f9fafb;
}

/* Phrase de bienvenue */
.bienvenue {
  font-style: italic;
  margin-bottom: 2rem;
  font-size: 1.1em;
  color: #555;
  transition: transform 0.3s ease;
}
.bienvenue:hover {
  transform: scale(1.05);
  color: #42b983;
}

/* Hero section */
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background: linear-gradient(135deg, #42b983, #2c7a7b);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.hero-text {
  font-size: 2em;
  font-weight: bold;
  max-width: 800px;
  margin: 0;
  line-height: 1.4;
}
.nom {
  color: #ffe082;
  transition: color 0.3s;
}
.nom:hover {
  color: #ffd54f;
}

/* Intro section */
.intro-section {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 850px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}
.card p {
  font-size: 1.05em;
  line-height: 1.6;
}

/* Citation */
.citation-section {
  margin-top: 3rem;
  padding: 1rem;
  background-color: #edf2f7;
  border-radius: 10px;
}
.citation-text {
  font-style: italic;
  font-size: 1.3em;
  color: #555;
  transition: color 0.3s ease;
}
.citation-text:hover {
  color: #2c7a7b;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-text {
    font-size: 1.6em;
  }
  .card p {
    font-size: 1em;
  }
}
</style>
