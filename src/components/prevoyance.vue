<template>
  <section class="prevoyance-hero">
    <div class="prevoyance-hero-container">
      <div class="prevoyance-content-wrapper">
        <article class="prevoyance-hero-content">
          <img loading="lazy" src="../assets/images/prevoyance2.jpeg" class="prevoyance-hero-background" />
          <div class="prevoyance-text-content">
            <h1 class="prevoyance-title">ASSURANCE PREVOYANCE CAP AGIPI AXA</h1>
            <h2 class="prevoyance-subtitle">Prévoyance des TNs, Professions libérales, Chefs d' Entreprise</h2>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f30beb35533d8e902b28f55c3a4669d8a500e7546fe5770fc4c75cbf5ee615f?placeholderIfAbsent=true&apiKey=d1f111f51c1d47fba0386534ec896743" alt="AGIPI AXA logo" class="prevoyance-company-logo" />
            <h3 class="prevoyance-main-heading">PRÉVOYANCE INDÉPENDANTS<br />AXA AGIPI</h3>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e72a4301ced37f96230feb5d1ca1d899976e6a66babb9e68c439b106179708b?placeholderIfAbsent=true&apiKey=d1f111f51c1d47fba0386534ec896743" alt="Insurance icon" class="prevoyance-insurance-icon" />
            <p class="prevoyance-description">
              L'assurance Prévoyance Indépendants AxA AGIPI vous permet de bénéficier de<br />
              revenus complémentaires en cas d'incapacité de travail, d'invalidité et de décès<br />
              Le contrat complète ainsi les remboursements prévus par votre régime<br />
              obligatoire
            </p>
            <button class="prevoyance-cta-button" tabindex="0">
              <span class="prevoyance-button-text">DEMANDER UN DEVIS</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/prevoyance.css';
import NavigationBar from './NavigationBar.vue';
import FooterComponent from './FooterComponent.vue';

export default defineComponent({
  name: 'Prevoyance',
  components: {
    NavigationBar,
    FooterComponent,
  },
});
</script>
