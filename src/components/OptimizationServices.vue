<template> 
  <section class="optimization-services">
    <header class="text-center px-6 md:px-0">
      <h1 class="flex flex-col items-center justify-center w-full mt-8 text-3xl font-bold text-center text-neutral-700">
        Accompagner vos projets Prévoyance Mutuelle Retraite
      </h1>
      <hr class="border-0 h-[2.5px] w-full max-w-[80px] bg-[#C9B085] mx-auto mt-4">
      <p class="mt-4 text-neutral-600 text-xl px-6">
        Le cabinet <b class="font-bold">AXA Prévoyance & Patrimoine</b> de <b class="font-bold">Gildas LAFFAILLE</b> vous aide à réaliser vos projets en Prévoyance, 
        Mutuelle, Retraite, Garantie Assurance emprunteur…et plus encore
      </p>
    </header>

    <div class="content-wrapper">
      <div class="image-column">
        <img loading="lazy" src="../assets/images/laptop.webp" class="main-image" />
      </div>
      <div class="services-column">
        <div class="services-list">
          <ul class="service-items">
            <li class="service-item">
              <img loading="lazy" src="../assets/icons/check.svg" class="service-icon" alt="Service icon" />
              <p>Optimisation de la transmission et des droits de succession</p>
            </li>
            <li class="service-item">
              <img loading="lazy" src="../assets/icons/check.svg" class="service-icon" alt="Service icon" />
              <p>Bilan social et patrimonial</p>
            </li>
            <li class="service-item">
              <img loading="lazy" src="../assets/icons/check.svg" class="service-icon" alt="Service icon" />
              <p>Santé, retraite, prévoyance, assurance vie, contrat de capitalisation</p>
            </li>
            <li class="service-item">
              <img loading="lazy" src="../assets/icons/check.svg" class="service-icon" alt="Service icon" />
              <p>Plan d'Épargne Retraite</p>
            </li>
            <li class="service-item">
              <img loading="lazy" src="../assets/icons/check.svg" class="service-icon" alt="Service icon" />
              <p>Optimisation des revenus du dirigeant d'entreprise</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/Optimizationservices.css';

export default defineComponent({
  name: 'OptimizationServices',
});
</script>
