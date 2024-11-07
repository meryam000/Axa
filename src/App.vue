<template>
  <div id="app">
    <NavigationBar />
    <router-view />  <!-- This will load the components based on the route -->
    <FooterComponent />
  </div>

  <div v-if="showConsent" class="cookie-consent">
    <div class="modal-overlay">
      <div class="modal-content">
        <h2>Mentions Légales</h2>
        <p>Votre Agent général Prévoyance & Patrimoine AXA Clamart Gildas Laffaille<br>32 Rue De Bievres, 92140 Clamart</p>
        <p>LAFFAILLE GILDAS N°ORIAS - <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">https://www.orias.fr</a> : 15000669</p>
        <p>Agent général d'assurance exclusif AXA Prévoyance & Patrimoine. Mandataire exclusif en opérations de banque d'AXA Banque.</p>
        <p>Coordonnées de l'Autorité de contrôle prudentiel et de résolution – 4 pl. de Budapest - CS 92459 - 75436 Paris CEDEX 09.</p>
        <p>Sociétés d'assurance mandantes: AXA France Vie, AXA Assurances Vie Mutuelle, AXA France IARD, et AXA Assurances IARD Mutuelle. Le détail des procédures de recours et de réclamation et les coordonnées du service dédié sont disponibles sur le site <a href="https://www.axa.fr" target="_blank" rel="noopener noreferrer">https://www.axa.fr</a>.</p>
        <p>En matière d'assurance, en cas de non-résolution d'un différend à l'issue du processus de réclamation, vous pouvez avoir recours au Médiateur, en vous adressant à l'association : La Médiation de l'Assurance, TSA 50110, 75441 Paris Cedex 09 - <a href="https://www.mediation-assurance.org" target="_blank" rel="noopener noreferrer">www.mediation-assurance.org</a>.</p>
        <p>Orias - Les Agents AXA sont régis par le code des assurances. Pour plus de détails, consultez le <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer">Code des assurances - Légifrance</a>.</p>

      </div>
    </div>
    <button @click="acceptCookies">Accept</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import Cookies from 'js-cookie';
import LegalModal from './components/LegalModal.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      showConsent: false,
    };
  },
  mounted() {
    // Check if the consent cookie exists
    if (!Cookies.get('cookie-consent')) {
      this.showConsent = true;
    }
  },
  methods: {
    acceptCookies() {
      // Set a cookie to remember the user's consent
      Cookies.set('cookie-consent', 'accepted', { expires: 365 });
      this.showConsent = false;
    },
  },
  components: {
    NavigationBar,
    FooterComponent,
  },
});
</script>

<style scoped>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  color: #000;
  text-align: center;
  padding: 15px;
  z-index: 1000;
  border-top: 1px solid #000;
}
.cookie-consent button {
  background: blue;
  color: #FFF;
  border: none;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
}

p {
  font-size: 12px;
  font-weight: 400;
}

</style>
