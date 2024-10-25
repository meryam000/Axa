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

      <!-- Container for Offering Cards -->
      <div class="offering-cards-container grid grid-cols-3 mt-6 ml-10">
        <OfferingCard
          title="Title 1"
          description="Description for the first offering card."
          iconSrc="../assets/icons/icon1.svg"
        />
        <OfferingCard
          title="Title 2"
          description="Description for the second offering card."
          iconSrc="../assets/icons/icon2.svg"
        />
        <OfferingCard
          title="Title 3"
          description="Description for the third offering card."
          iconSrc="../assets/icons/icon3.svg"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/prevoyance.css';
import OfferingCard from './OfferingCard.vue';
import NavigationBar from './NavigationBar.vue';
import FooterComponent from './FooterComponent.vue';

export default defineComponent({
  name: 'Prevoyance',
  components: {
    NavigationBar,
    FooterComponent,
    OfferingCard,
  },
});
</script>
