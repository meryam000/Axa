<template>
  <section class="hero-section">
    <div class="hero-content">
      <!-- Background image with gradient overlay -->
      <div class="hero-background"></div>
      
      <!-- Content -->
      <div class="hero-text-container">
        <header class="hero-header">
          <h1 class="company-name">Cabinet Gildas Laffaille</h1>
          <p class="company-subtitle">AXA Prévoyance & Patrimoine</p>
        </header>
        <hr class="custom-hr">
        <div class="hero-titles">
          <h2>Prévoyance</h2>
          <h2>Mutuelle</h2>
          <h2>Retraite</h2>
        </div>
        <hr class="custom-hr">
        <div class="hero-cta-container">
          <p class="hero-description">
            Protection sociale et gestion de patrimoine pour les Particuliers, Professions libérales ou Entreprises.
          </p>
          <button class="cta-button">DEMANDER UN DEVIS</button>
        </div>
      </div>
    </div>
  </section>

  <section>
      <div class="bg-white">
        <h1 class="py-10 bg-black bg-opacity-0 text-4xl text-[#C9B085] text-center font-semibold">
          PREVOYANCE MUTUELLE RETRAITE – GILDAS LAFFAILLE 92
      </h1>
      <p id="parag" class="text-black ml-14 mr-14 pb-10 text-left text-[20px] text-xl font-sans">
        Le cabinet <b class="font-bold">AXA Prévoyance & Patrimoine</b> de <b class="font-bold">Gildas LAFFAILLE</b> à Hauts-de-Seine
        (92) vous accompagne dans tous vos projets de vie en vous proposant des solutions sur mesure, depuis la 
        <a href="/prevoyance" class="font-bold text-[#C9B085] hover:text-[#36369F]">Prévoyance</a>, la <a href="/mutuelle" class="font-bold text-[#C9B085] hover:text-[#36369F]">Mutuelle</a>, la 
        <a href="/retraite" class="font-bold text-[#C9B085] hover:text-[#36369F]">Retraite</a>, la garantie <a href="/assurance_emprunteur" class="font-bold text-[#C9B085] hover:text-[#36369F]">Assurance emprunteur</a>... jusqu'à 
        l'épargne et la transmission, succession, en fonction de votre situation.
        
      </p>
      </div>
      <br>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/welcome.css';

export default defineComponent({
  name: 'Welcome',
});
</script>