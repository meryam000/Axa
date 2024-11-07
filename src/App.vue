<template>
  <div id="app">
    <NavigationBar />
    <router-view />  <!-- This will load the components based on the route -->
    <FooterComponent />
    <CookieConsentBanner />

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import CookieConsentBanner from './components/CookieConsentBanner.vue';
export default defineComponent({
  name: 'App',
  data() {
    return {
      showConsent: false,
    };
  },
  
  components: {
    NavigationBar,
    FooterComponent,
    CookieConsentBanner,

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
