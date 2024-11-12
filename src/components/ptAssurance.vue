<template>
    <section class="assurance-hero">
      <div class="assurance-hero-container">
        <h1 class="title-keys">Les 3 points clés de votre assurance emprunteur</h1>
        <div class="offering-cards-container">
          <!-- Card 1 -->
          <div class="offering-card">
            <i class="offering-title fa fa-briefcase fa-lg"></i>
            <h4 class="offering-title">Arrêt de Travail</h4>
            <button class="view-more-button" @click="toggleViewMore('card1')">
              En savoir plus
            </button>
            <p v-if="showMore.card1" class="offering-more-info">
              En cas d'arrêt de travail vous serez en incapacité temporaire de travail (ITT).<br />
              Avec le contrat ARC, ces indemnités sont prises en charge pendant la durée de l'arrêt de travail, après déduction du délai de franchise.<br />
              Les garanties sont forfaitaires et indépendantes de votre niveau de revenus, vous assurant une couverture jusqu'à l'âge de 70 ans.
            </p>
          </div>
  
          <!-- Card 2 -->
          <div class="offering-card">
            <i class="offering-title fa fa-ambulance fa-lg"></i>
            <h4 class="offering-title">Invalidité</h4>
            <button class="view-more-button" @click="toggleViewMore('card2')">
              En savoir plus
            </button>
            <p v-if="showMore.card2" class="offering-more-info">
              En cas d'invalidité, les indemnités journalières qui vous seront versées dépendent de votre taux d'invalidité fixé par expertise.<br />
              Le contrat prendra en charge tout ou partie des échéances de votre crédit.
            </p>
          </div>
  
          <!-- Card 3 -->
          <div class="offering-card">
            <i class="offering-title fa fa-bed fa-lg"></i>
            <h4 class="offering-title">Décès</h4>
            <button class="view-more-button" @click="toggleViewMore('card3')">
              En savoir plus
            </button>
            <p v-if="showMore.card3" class="offering-more-info">
              Le décès est couvert par le contrat en remboursant à votre banque le capital restant dû au jour du décès.<br />
              La perte totale ou irréversible d’autonomie est également prise en charge jusqu'à 70 ans.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import '../assets/prevoyance.css';

  
  export default defineComponent({
    name: 'PtAssurance',
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
  