<template>
    <section class="optimization-services">
      <header class="text-center px-6 md:px-0">
        <h1 class="flex flex-col items-center justify-center w-full mt-8 text-3xl font-bold text-center text-neutral-700">
          Les partenaires AXA Prévoyance & Patrimoine 
        </h1>
      </header>
  
      <div class="partners-logos-container mt-8 mx-auto flex justify-center gap-8">
        <img src="../assets/images/APRS 1.png" />
        <img src="../assets/images/AGIPI.png"/>
        <img src="../assets/images/axa_banque.png"/>
        <img src="../assets/images/itelis.png"/>
        <img src="../assets/images/anpere.png"/>
        <img src="../assets/images/axa_prive.png"/>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Partenaire',
  });
  </script>
  
  <style scoped>
  .partners-logos-container {
    display: flex;
    gap: 6rem;
    justify-content: center;
    align-items: center;
  }
  </style>
  