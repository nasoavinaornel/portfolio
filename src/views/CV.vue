<template>
  <div class="cv-page">
    <h2>Mon CV & Compétences</h2>

    <a href="/CV.pdf" download="CV.pdf" class="download-cv-btn">
      Télécharger mon CV
    </a>

    <section class="cv-section">
      <h3>Profil</h3>
      <p>
        Actuellement en deuxième année de Licence d'Informatique à l'École Nationale d'Informatique (ENI), parcours Informatique générale (développement et réseaux), je suis à la recherche d'un stage pratique pour développer mes compétences en programmation, configuration et sécurité des réseaux. Passionné par les systèmes et la cybersécurité, j'aspire à mettre mes connaissances en pratique dans un environnement professionnel.
      </p>
    </section>

    <section class="cv-section">
      <h3>Détails des Compétences</h3>
      <div class="competences-container">

        <div class="competence-categorie">
          <h4>Réseaux & Protocoles</h4>
          <div class="tags-container">
            <span class="skill-tag">TCP/IP</span>
            <span class="skill-tag">DHCP</span>
            <span class="skill-tag">DNS</span>
            <span class="skill-tag">HTTP/HTTPS</span>
            <span class="skill-tag">SSH</span>
            <span class="skill-tag">RIPv2</span>
            <span class="skill-tag">OSPF</span>
            <span class="skill-tag">FTP/SFTP</span>
            <span class="skill-tag">SMTP</span>
          </div>
        </div>

        <div class="competence-categorie">
          <h4>Systèmes & Administration</h4>
          <div class="tags-container">
            <span class="skill-tag">Linux (Debian)</span>
            <span class="skill-tag">Windows Server</span>
            <span class="skill-tag">WSL</span>
            <span class="skill-tag">Bash / Shell</span>
          </div>
        </div>

        <div class="competence-categorie">
          <h4>Développement & Langages</h4>
          <div class="tags-container">
            <span class="skill-tag">C/C++ (bases)</span>
            <span class="skill-tag">PHP (bases)</span>
            <span class="skill-tag">HTML/CSS/JavaScript (notions)</span>
          </div>
        </div>

        <div class="competence-categorie">
          <h4>Outils & Logiciels</h4>
          <div class="tags-container">
            <span class="skill-tag">GNS3</span>
            <span class="skill-tag">Wireshark</span>
            <span class="skill-tag">VirtualBox</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Metasploit</span>
            <span class="skill-tag">Suricata</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cv-section">
      <h3>Niveau de compétences</h3>
      <div class="competences-bar-container">
        <div class="competence-item">
          <label>Linux (Debian)</label>
          <div class="bar-container">
            <div class="bar" style="width: 60%;"></div>
            <span class="pourcentage">60%</span>
          </div>
        </div>
        <div class="competence-item">
          <label>Windows</label>
          <div class="bar-container">
            <div class="bar" style="width: 60%;"></div>
            <span class="pourcentage">60%</span>
          </div>
        </div>
        <div class="competence-item">
          <label>Virtualisation (VirtualBox)</label>
          <div class="bar-container">
            <div class="bar" style="width: 70%;"></div>
            <span class="pourcentage">70%</span>
          </div>
        </div>

        <div class="competence-item">
          <label>Docker</label>
          <div class="bar-container">
            <div class="bar" style="width: 40%;"></div>
            <span class="pourcentage">40%</span>
          </div>
        </div>

        <div class="competence-item">
          <label>Réseaux (DNS, OSPF, etc.)</label>
          <div class="bar-container">
            <div class="bar" style="width: 50%;"></div>
            <span class="pourcentage">50%</span>
          </div>
        </div>

        <div class="competence-item">
          <label>Sécurité (Analyse de Malware)</label>
          <div class="bar-container">
            <div class="bar" style="width: 55%;"></div>
            <span class="pourcentage">55%</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cv-section">
      <h3>Soft Skills</h3>
      <div class="tags-container">
        <span class="soft-skill-tag">Résolution de Problèmes</span>
        <span class="soft-skill-tag">Travail d'Équipe</span>
        <span class="soft-skill-tag">Autonomie</span>
        <span class="soft-skill-tag">Rigueur</span>
        <span class="soft-skill-tag">Adaptabilité</span>
      </div>
    </section>

    <section class="cv-section">
      <h3>Études</h3>
      <ul class="studies-list">
        <li>Première année de licence en parcours IG, mention informatique à It ENI | 2023-2024</li>
        <li>Première année de licence en parcours IG, mention informatique à It ENI | 2024-2025</li>
        <li>Baccalauréat option S Ambohibary, Moramanga | 2022</li>
      </ul>
    </section>

    <section class="cv-section">
      <h3>Langues</h3>
      <ul class="languages-list-visual">
        <li>
          <div class="language-item">
            <span>Malagasy</span>
            <div class="proficiency-bar">
              <div class="proficiency-level natif"></div>
            </div>
            <span>(Langue natale)</span>
          </div>
        </li>
        <li>
          <div class="language-item">
            <span>Français</span>
            <div class="proficiency-bar">
              <div class="proficiency-level courant"></div>
            </div>
            <span>(Couramment)</span>
          </div>
        </li>
        <li>
          <div class="language-item">
            <span>Anglais</span>
            <div class="proficiency-bar">
              <div class="proficiency-level intermediaire"></div>
            </div>
            <span>(Intermédiaire)</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CVPage',
}
</script>

<style scoped>
/* Styles de base de la page CV */
.cv-page {
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 900px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2em;
  color: #2c3e50;
}

.cv-section {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cv-section h3 {
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  color: #42b983;
  font-size: 1.5em;
}

/* Nouveau style pour le bouton de téléchargement */
.download-cv-btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.download-cv-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

/* Styles pour les barres de progression des compétences */
.competences-bar-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.competence-item label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.bar-container {
  background-color: #e0e0e0;
  border-radius: 5px;
  height: 20px;
  position: relative;
}

.bar {
  background-color: #42b983;
  height: 100%;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
}

.pourcentage {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-weight: bold;
  font-size: 0.9em;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Styles pour les tags des compétences */
.competences-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.competence-categorie h4 {
  font-size: 1.2em;
  margin-bottom: 1rem;
  color: #555;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  background-color: #e0f2f1;
  color: #00796b;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: bold;
}

.soft-skill-tag {
  background-color: #fff3e0;
  color: #e65100;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

/* Styles pour les langues (représentation visuelle) */
.languages-list-visual {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.language-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-item span:first-of-type {
  font-weight: bold;
  min-width: 100px;
  text-align: left;
}

.language-item span:last-of-type {
  font-style: italic;
  color: #666;
  min-width: 120px;
}

.proficiency-bar {
  flex-grow: 1;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.proficiency-level {
  height: 100%;
  border-radius: 5px;
}

.natif {
  background-color: #42b983; /* Vert */
  width: 100%;
}

.courant {
  background-color: #3498db; /* Bleu */
  width: 80%;
}

.intermediaire {
  background-color: #f39c12; /* Jaune */
  width: 50%;
}

/* Media Query pour les grands écrans */
@media (min-width: 768px) {
  .competences-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .competence-categorie {
    width: 48%;
  }
}
</style>