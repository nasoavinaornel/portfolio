<template>
  <div class="projets-page">
    <h2>Mes Projets</h2>
    <p class="intro-projets">
      Découvrez une sélection de mes projets académiques et pratiques. Chacun d'eux a été l'occasion de mettre en application mes compétences en réseaux, systèmes et cybersécurité.
    </p>

    <div class="projets-container">
      
      <div class="projet-card">
        <h3>Mise en place de Windows Server</h3>
        <p>Mise en place et gestion de Windows Server (contrôleur de domaine, Active Directory).</p>
        <div class="carrousel-container">
          <div class="carrousel-images" :style="{ transform: 'translateX(-' + currentSlide[0] * 100 + '%)' }">
            <img src="@/assets/WS.png" alt="Capture d'écran de Windows Server">
            <img src="@/assets/WS1.png" alt="Configuration Active Directory">
          </div>
          <button class="carrousel-btn prev-btn" @click="prevSlide(0)">&#10094;</button>
          <button class="carrousel-btn next-btn" @click="nextSlide(0)">&#10095;</button>
        </div>
        <div class="tags-container">
          <span class="competence-tag">Windows Server</span>
          <span class="competence-tag">Active Directory</span>
        </div>
      </div>

      <div class="projet-card">
        <h3>Service DNS et Messagerie</h3>
        <p>Mise en place d'un service DNS et serveur de messagerie local (iRedMail).</p>
        <div class="carrousel-container">
          <div class="carrousel-images" :style="{ transform: 'translateX(-' + currentSlide[1] * 100 + '%)' }">
            <img src="@/assets/DNS.png" alt="Capture d'écran DNS">
            <img src="@/assets/DNS.png" alt="Configuration iRedMail">
          </div>
          <button class="carrousel-btn prev-btn" @click="prevSlide(1)">&#10094;</button>
          <button class="carrousel-btn next-btn" @click="nextSlide(1)">&#10095;</button>
        </div>
        <div class="tags-container">
          <span class="competence-tag">DNS</span>
          <span class="competence-tag">iRedMail</span>
          <span class="competence-tag">Réseaux</span>
        </div>
      </div>
      
      <!-- <div class="projet-card">
        <h3>Analyse de trafic réseau</h3>
        <p>Analyse de trafic réseau avec Wireshark.</p>
        <div class="carrousel-container">
          <div class="carrousel-images" :style="{ transform: 'translateX(-' + currentSlide[2] * 100 + '%)' }">
            <img src="@/assets/WS.png" alt="Capture d'écran Wireshark">
            <img src="@/assets/WS.png" alt="Analyse de paquets">
          </div>
          <button class="carrousel-btn prev-btn" @click="prevSlide(2)">&#10094;</button>
          <button class="carrousel-btn next-btn" @click="nextSlide(2)">&#10095;</button>
        </div>
        <div class="tags-container">
          <span class="competence-tag">Wireshark</span>
          <span class="competence-tag">Réseaux</span>
        </div>
      </div> -->

      <div class="projet-card">
        <h3>Analyse de malware (WannaCry)</h3>
        <p>Analyse statique et dynamique d'un malware (WannaCry) dans un environnement contrôlé (REMnux, FLARE VM, PfSense).</p>
        <div class="carrousel-container">
          <div class="carrousel-images" :style="{ transform: 'translateX(-' + currentSlide[3] * 100 + '%)' }">
            <img src="@/assets/wana.png" alt="Capture d'écran de l'analyse statique de WannaCry">
            <img src="@/assets/pfsence.png" alt="Analyse de logs">
          </div>
          <button class="carrousel-btn prev-btn" @click="prevSlide(3)">&#10094;</button>
          <button class="carrousel-btn next-btn" @click="nextSlide(3)">&#10095;</button>
        </div>
        <div class="tags-container">
          <span class="competence-tag">Cybersécurité</span>
          <span class="competence-tag">Analyse de Malware</span>
        </div>
      </div>

      <div class="projet-card">
        <h3>Attaque post-exploitation Android</h3>
        <p>Simulation d'une attaque post-exploitation Android via Metasploit (reverse shell) et détection de ses activités malveillante avec Suricata (IDS).</p>
        <div class="carrousel-container">
          <div class="carrousel-images" :style="{ transform: 'translateX(-' + currentSlide[4] * 100 + '%)' }">
            <img src="@/assets/metasploit.png" alt="Capture d'écran de Metasploit">
            <img src="@/assets/suricata.png" alt="Détection avec Suricata">
          </div>
          <button class="carrousel-btn prev-btn" @click="prevSlide(4)">&#10094;</button>
          <button class="carrousel-btn next-btn" @click="nextSlide(4)">&#10095;</button>
        </div>
        <div class="tags-container">
          <span class="competence-tag">Metasploit</span>
          <span class="competence-tag">Suricata (IDS)</span>
        </div>
      </div>

      <div class="projet-card">
        <h3>Protocoles de routage dynamiques</h3>
        <p>Mise en œuvre de protocoles de routage dynamiques (RIPv2 et OSPF).</p>
        <div class="carrousel-container">
          <div class="carrousel-images" :style="{ transform: 'translateX(-' + currentSlide[5] * 100 + '%)' }">
            <img src="@/assets/routage2.png" alt="Capture d'écran de la configuration RIPv2">
            <img src="@/assets/routage1.png" alt="Schéma OSPF">
          </div>
          <button class="carrousel-btn prev-btn" @click="prevSlide(5)">&#10094;</button>
          <button class="carrousel-btn next-btn" @click="nextSlide(5)">&#10095;</button>
        </div>
        <div class="tags-container">
          <span class="competence-tag">RIPv2</span>
          <span class="competence-tag">OSPF</span>
          <span class="competence-tag">Routage</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjetsPage',
  data() {
    return {
      // currentSlide est un tableau pour gérer les carrousels de chaque projet
      currentSlide: [0, 0, 0, 0, 0, 0],
      // totalSlides est un tableau pour stocker le nombre d'images par projet
      totalSlides: [2, 2, 2, 2, 2, 2] 
    };
  },
  methods: {
    nextSlide(index) {
      this.currentSlide[index] = (this.currentSlide[index] + 1) % this.totalSlides[index];
    },
    prevSlide(index) {
      this.currentSlide[index] = (this.currentSlide[index] - 1 + this.totalSlides[index]) % this.totalSlides[index];
    }
  }
}
</script>

<style scoped>
.projets-page {
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  max-width: 1200px;
  margin: auto;
}

h2 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.intro-projets {
  max-width: 800px;
  margin: 0 auto 3rem auto;
  font-size: 1.1em;
  line-height: 1.6;
}

.projets-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  justify-content: center;
}

.projet-card {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.projet-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.projet-card h3 {
  font-size: 1.5em;
  color: #42b983;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.projet-card p {
  font-size: 1em;
  line-height: 1.5;
  color: #555;
  margin-bottom: 1rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
}

.competence-tag {
  background-color: #e0f2f1;
  color: #00796b;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: bold;
}

/* Styles pour le carrousel */
.carrousel-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.carrousel-images {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carrousel-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

.carrousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
}

.carrousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>