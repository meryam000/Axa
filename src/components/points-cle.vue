<template>
  <section class="prevoyance-hero">
    <div class="prevoyance-hero-container">
       <h1 class="title-keys">Les 3 points clés de votre prévoyance individuelle</h1>
      <!-- Cards for Offerings -->
      <div class="offering-cards-container">
        <!-- Card 1 -->
        <div class="offering-card">
          <i class="offering-title fa fa-briefcase fa-lg"></i>

          <h4 class="offering-title">Arrêt de Travail</h4>
          <p class="offering-description">Indemnités journalières forfaitaires, Remboursement des Frais Professionnels</p>
          <button class="view-more-button" @click="toggleViewMore('card1')">
            En savoir plus
          </button>
          <p v-if="showMore.card1" class="offering-more-info">En cas d’arrêt de travail, la garantie indemnités journalières vous permet de maintenir vos revenus jusqu’à votre reprise du travail.
Nous définissons le montant et la franchise (délai avant indemnisation) pour compléter les prestations de votre régime obligatoire.
Tout ou partie de vos charges professionnelles peuvent également être couvertes par le contrat afin de ne pas mettre en péril votre activité professionnelle.</p>
        </div>

        <!-- Card 2 -->
        <div class="offering-card">
          <i class="offering-title fa fa-ambulance fa-lg"></i>
          <h4 class="offering-title">Invalidité</h4>
          <p class="offering-description">pension versée jusqu’à 67 ans , capital rééducation ou maladie grave</p>
          <button class="view-more-button" @click="toggleViewMore('card2')">
            En savoir plus
          </button>
          <p v-if="showMore.card2" class="offering-more-info">En cas d’accident ou de maladie longue, vous pouvez bénéficier d’une rente et/ou d’un capital invalidité qui vous sont versés jusqu’à l’âge légal de la retraite afin de sécuriser votre niveau de vie sans nécessairement piocher dans votre épargne.</p>
        </div>

        <!-- Card 3 -->
        <div class="offering-card">
          <i class="offering-title fa fa-bed fa-lg"></i>
          <h4 class="offering-title">Décès</h4>
          <p class="offering-description">Pension de conjoint, Rente éducation, Capital</p>
          <button class="view-more-button" @click="toggleViewMore('card3')">
            En savoir plus
          </button>
          <p v-if="showMore.card3" class="offering-more-info">En cas de décès vous pouvez protéger vos proches et ainsi assurer une continuité de revenus au sein de votre foyer.
            Ces prestations peuvent être de 3 natures :

            versement d’un capital à vos proches
            versement d’une pension de conjoint
            versement d’une rente éducation à vos enfants jusqu’à leurs 26 ans (sans condition de poursuite d’études).</p>
        </div>
      </div>
    </div>
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
