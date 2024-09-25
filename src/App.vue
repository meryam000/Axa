<template>
  <div id="app" class="min-h-screen flex flex-col">
    <NavigationBar />
    <OfferingsComponent class="flex-grow" />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import OfferingsComponent from './components/OfferingsComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    FooterComponent,
    OfferingsComponent,
  },
});
</script>

<style scoped>
html, body {
  height: 100%;
  width: 100vw; /* Ensure the body takes the full viewport width */
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scroll if content overflows */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw; /* Use viewport width to ensure full stretch across the screen */
}

main {
  flex-grow: 1;
  width: 200vw; /* Ensure main content also stretches fully across */
  margin: 0; /* Remove any default margin */
}
</style>
