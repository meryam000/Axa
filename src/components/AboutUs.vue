<template>
    <section class="about-us-section">
      <div class="about-us-container">
        <div class="about-us-content">
          <div class="image-column">
            <img src="../assets/images/gildas.webp" alt="Gildas LAFFAILLE" class="profile-image" />
          </div>
          <div class="text-column">
            <div class="text-content">
              <h1 class="section-title">Gildas LAFFAILLE à votre écoute</h1>
              <div class="profile-image-wrapper">
                <hr class="border-0 h-[2.5px] w-full max-w-[50px] bg-[#C9B085] mx-auta ml-24">
            </div>
              <div class="description-wrapper">
                <p class="description">
                  <span>Bonjour ! Je suis </span>
                  <strong>Gildas Laffaille</strong>
                  <span>, votre Agent général d'assurances </span>
                  <strong>AXA Prévoyance et Patrimoine</strong>
                  <span> à Hauts-de-Seine (92), pour vous aider à protéger ce qui compte vraiment ! </span>
                </p>
                <p class="description">
                  Avec une expertise dédiée à la protection financière et à la gestion patrimoniale, je suis là pour accompagner les particuliers et les professionnels (professions libérales, chefs d'entreprises, sociétés) dans toutes leurs démarches.
                  <br>Je vous propose des solutions sur-mesure pour la prévoyance, la santé, la retraite, l'épargne et la transmission de patrimoine, parfaitement adaptées à votre situation.
                </p>
                <p class="description">
                  Mon objectif ? Être à vos côtés à chaque étape de votre vie, pour répondre à toutes vos questions et vous offrir des solutions vraiment personnalisées.
                </p>
                <p class="description">
                  Alors, prêt(e) à préparer votre avenir en toute sérénité ? Contactez-moi et ensemble, atteignons vos objectifs financiers !
                </p>
                <button class="contact-button" @click="handleContact">CONTACTEZ-NOUS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import '../assets/aboutus.css';
  
  export default defineComponent({
    name: 'AboutUs',
    methods: {
      handleContact() {
        // Implement contact functionality
        console.log('Contact button clicked');
      }
    }
  });
  </script>