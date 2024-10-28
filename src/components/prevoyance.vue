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
       <h1 class="title-keys">Les 3 points clés de votre prévoyance individuelle</h1>
      <!-- Cards for Offerings -->
      <div class="offering-cards-container">
        <!-- Card 1 -->
        <div class="offering-card">
          <img src="../assets/icons/icon1.svg" class="offering-icon" />
          <h4 class="offering-title">Arrêt de Travail</h4>
          <p class="offering-description">Indemnités journalières forfaitaires, Remboursement des Frais Professionnels</p>
          <button class="view-more-button" @click="toggleViewMore('card1')">
            View More
          </button>
          <p v-if="showMore.card1" class="offering-more-info">En cas d’arrêt de travail, la garantie indemnités journalières vous permet de maintenir vos revenus jusqu’à votre reprise du travail.
Nous définissons le montant et la franchise (délai avant indemnisation) pour compléter les prestations de votre régime obligatoire.
Tout ou partie de vos charges professionnelles peuvent également être couvertes par le contrat afin de ne pas mettre en péril votre activité professionnelle.</p>
        </div>

        <!-- Card 2 -->
        <div class="offering-card">
          <img src="../assets/icons/icon2.svg"  class="offering-icon" />
          <h4 class="offering-title">Invalidité</h4>
          <p class="offering-description">pension versée jusqu’à 67 ans , capital rééducation ou maladie grave</p>
          <button class="view-more-button" @click="toggleViewMore('card2')">
            View More
          </button>
          <p v-if="showMore.card2" class="offering-more-info">En cas d’accident ou de maladie longue, vous pouvez bénéficier d’une rente et/ou d’un capital invalidité qui vous sont versés jusqu’à l’âge légal de la retraite afin de sécuriser votre niveau de vie sans nécessairement piocher dans votre épargne.</p>
        </div>

        <!-- Card 3 -->
        <div class="offering-card">
          <img src="../assets/icons/icon3.svg"class="offering-icon" />
          <h4 class="offering-title">Décès</h4>
          <p class="offering-description">Pension de conjoint, Rente éducation, Capital</p>
          <button class="view-more-button" @click="toggleViewMore('card3')">
            View More
          </button>
          <p v-if="showMore.card3" class="offering-more-info">En cas de décès vous pouvez protéger vos proches et ainsi assurer une continuité de revenus au sein de votre foyer.
            Ces prestations peuvent être de 3 natures :

            versement d’un capital à vos proches
            versement d’une pension de conjoint
            versement d’une rente éducation à vos enfants jusqu’à leurs 26 ans (sans condition de poursuite d’études).</p>
        </div>
      </div>
    </div>
    <h1 class="title-keys">Assurance Prévoyance : qui est concerné ?
    </h1>

  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '../assets/prevoyance.css';

export default defineComponent({
  name: 'Prevoyance',
  setup() {
    const showMore = ref({
      card1: false,
      card2: false,
      card3: false,
    });

    const toggleViewMore = (card: 'card1' | 'card2' | 'card3') => {
  showMore.value[card] = !showMore.value[card];
};


    return {
      showMore,
      toggleViewMore,
    };
  },
});
</script>
