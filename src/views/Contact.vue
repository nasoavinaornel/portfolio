<template>
  <div class="contact-page">
    <h2>Contactez-moi</h2>
    <p class="intro-contact">
      Je suis disponible pour des opportunités de stage et de collaboration. N'hésitez pas à me contacter si vous avez des questions ou des propositions.
    </p>

    <div class="contact-container">
      <form class="contact-form" action="https://formspree.io/f/mqadwezk" method="POST">
        <label for="name">Votre Nom :</label>
        <input type="text" id="name" name="name" placeholder="Votre nom complet" required>
        
        <label for="email">Votre Email :</label>
        <input type="email" id="email" name="_replyto" placeholder="votre_email@exemple.com" required>
        
        <label for="subject">Sujet :</label>
        <input type="text" id="subject" name="_subject" placeholder="Sujet de votre message" required>
        
        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="6" placeholder="Écrivez votre message ici..." required></textarea>
        
        <button type="submit">Envoyer le message</button>
      </form>
      
      <div class="contact-info">
        <h3>Mes coordonnées</h3>
        <p>
          Si vous préférez, vous pouvez me joindre directement :
        </p>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <span>+261 34 67 740 49</span>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:nasoavinaornel@gmail.com">nasoavinaornel@gmail.com</a>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>Moramanga, Madagascar</span>
        </div>
        
        <h3>Suivez-moi</h3>
        <div class="social-links">
          <a href="URL_DE_VOTRE_LINKEDIN" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="URL_DE_VOTRE_GITHUB" target="_blank">
            <i class="fab fa-github-square fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
/* Les styles restent les mêmes */
.contact-page {
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  max-width: 900px;
  margin: auto;
}

h2 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.intro-contact {
  margin-bottom: 3rem;
  font-size: 1.1em;
}

.contact-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-form, .contact-info {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.contact-form label {
  display: block;
  font-weight: bold;
  margin-top: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  box-sizing: border-box;
}

.contact-form button {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #358a69;
}

.contact-info h3 {
  color: #42b983;
  margin-bottom: 1rem;
  font-size: 1.5em;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 10px;
}

.info-item i {
  color: #42b983;
  font-size: 1.2em;
}

.social-links {
  margin-top: 1.5rem;
}

.social-links a {
  color: #2c3e50;
  margin-right: 1rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #42b983;
}

@media (min-width: 768px) {
  .contact-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  .contact-form, .contact-info {
    width: 48%;
  }
}
</style>