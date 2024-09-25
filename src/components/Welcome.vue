<template>
    <section>
      <div class="section-container">
        <!-- Background image -->
        <img
          loading="lazy"
          src="../assets/images/paris.webp"
          alt=""
          class="background-img"
        />
        <!-- Content -->
        <div class="header-content">
          <header>
            <h1>Cabinet Gildas Laffaille</h1>
            <p>AXA Prévoyance & Patrimoine</p>
            <hr class="border-0 h-[2.5px] w-full max-w-[500px] bg-[#9e827b]">
          </header>
          <h2>Prévoyance</h2>
          <h2>Mutuelle Retraite</h2>
          <div class="flex flex-col items-start">
            <hr class="border-0 h-[2.5px] w-full max-w-[500px] bg-[#9e827b]">
            <p>
              Protection sociale et gestion de patrimoine pour les Particuliers,
              Professions libérales ou Entreprises.
            </p>
            <button>DEMANDER UN DEVIS</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import '../assets/welcome.css';

  
  export default defineComponent({
    name: 'Welcome',
  });
  </script>
  