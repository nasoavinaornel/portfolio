import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
//Pour l’instant on crée des pages vides pour les autres
import Projets from '../views/Projets.vue'
import CV from '../views/CV.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Accueil }  ,
  { path: '/projets', name: 'Projets', component: Projets },
  { path: '/cv', name: 'CV', component: CV },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
