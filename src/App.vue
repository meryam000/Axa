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
</style>
