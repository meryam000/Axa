<template>
  <section class="prevoyance-hero">
    <div class="prevoyance-hero-container">
      <div class="prevoyance-content-wrapper">
        <article class="prevoyance-hero-content">
          <img loading="lazy" src="../assets/images/prevoyance1.jpeg" class="prevoyance-hero-background" />
          <div class="prevoyance-text-content">
            <h1 class="prevoyance-title">ASSURANCE PREVOYANCE CAP AGIPI AXA</h1>
            <h2 class="prevoyance-subtitle">Prévoyance des TNS, Professions libérales, Chefs d' Entreprise</h2>
            <hr class="custom-hr">
            <h3 class="prevoyance-main-heading">PRÉVOYANCE INDÉPENDANTS<br />AXA AGIPI</h3>
            <div class="transparent-bg">
              <img loading="lazy" src="../assets/icons/prevoyance-icon.svg" class="prevoyance-insurance-icon" />
              <p class="prevoyance-description">
                L'assurance Prévoyance Indépendants AxA AGIPI vous permet de bénéficier de<br />
                revenus complémentaires en cas d'incapacité de travail, d'invalidité et de décès<br />
                Le contrat complète ainsi les remboursements prévus par votre régime<br />
                obligatoire
              </p>
            </div>
            <button class="prevoyance-cta-button" tabindex="0">
              <span class="prevoyance-button-text">DEMANDER UN DEVIS</span>
            </button>
          </div>
        </article>
      </div>
      
      <PointsCle/>
    </div>
    <h1 class="title-keys">Assurance Prévoyance : qui est concerné ?
    </h1>

  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '../assets/prevoyance.css';
import PointsCle from './points-cle.vue';

export default defineComponent({
  name: 'Prevoyance',
  components: {
    PointsCle
  },
  setup() {
  },
});
</script>
