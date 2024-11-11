<template>
    <div>
      <Welcome />
      <OfferingsComponent />
      <OptimizationServices />
      <Stats />
      <AboutUs />
      <Avis />
      <Partenaire />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Welcome from './Welcome.vue';
  import OfferingsComponent from './OfferingsComponent.vue';
  import OptimizationServices from './OptimizationServices.vue';
  import Stats from './Stats.vue';
  import AboutUs from './AboutUs.vue';
  import Partenaire from './Partenaire.vue';
  import Avis from './avis.vue';
  
  export default defineComponent({
    name: 'Home',
    components: {
      Welcome,
      OfferingsComponent,
      OptimizationServices,
      Stats,
      AboutUs,
      Partenaire,
      Avis
    },
  });
  </script>
  
  <style scoped>
  /* Add specific styles for home page here */
  </style>
  