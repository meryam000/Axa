<template>
  <div id="app" class="min-h-screen w-full flex flex-col">
    <NavigationBar />
    <Welcome />
    <OfferingsComponent class="flex-grow" />
    <OptimizationServices/>
    <Stats/>
    <AboutUs/>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import OfferingsComponent from './components/OfferingsComponent.vue';
import Welcome from './components/Welcome.vue';
import OptimizationServices from './components/OptimizationServices.vue';
import AboutUs from './components/AboutUs.vue';
import Stats from './components/Stats.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    FooterComponent,
    OfferingsComponent,
    Welcome,
    OptimizationServices,
    AboutUs,
    Stats,
  },
});
</script>

<style scoped>
html, body {
  height: 100%;
  width: 100%; /* Ensure full width */
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; /* Make sure the app takes full width */
}
</style>
