<template>
  <section class="flex flex-col bg-zinc-100 flex-grow w-full">
    <!-- Header -->
    <header class="flex flex-col items-center justify-center w-full text-3xl font-bold text-center text-neutral-700 px-6 md:px-0">
      <h1 class="py-10 bg-black bg-opacity-0 text-4xl text-neutral-700 text-center">
        Nos offres AXA Prévoyance & Patrimoine
      </h1>
      <hr class="border-0 h-[2.5px] w-full max-w-[80px] bg-[#C9B085]">
    </header>

    <!-- Main Content -->
    <main class="flex flex-col w-full max-w-[1243px] mx-auto mt-8 px-6 md:px-0 flex-grow">
      <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <!-- Offering Cards -->
        <OfferingCard
          v-for="(offering, index) in offerings"
          :key="index"
          :image-src="offering.imageSrc"
          :title="offering.title"
          :description="offering.description"
          :icon-src="offering.iconSrc"
        />

      </div>
    </main>

    <!-- Footer -->
    <footer class="flex flex-col items-center self-center px-12 pt-16 mt-12 w-full bg-black bg-opacity-0">
      <hr class="border-0 h-[2.5px] w-full max-w-[80px] bg-[#C9B085]">
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OfferingCard from './OfferingCard.vue';

import mutuelleImage from '../assets/images/mutuelle.jpeg';
import prevoyanceImage from '../assets/images/prevoyance.jpeg';
import assuranceImage from '../assets/images/assurance.jpeg';
import perImage from '../assets/images/per.jpeg';

/* Icon imports */
import mutuelleIcon from '../assets/icons/mutuelle-icon.svg';
import prevoyanceIcon from '../assets/icons/prevoyance-icon.svg';
import assuranceIcon from '../assets/icons/assurance-icon.svg';
import perIcon from '../assets/icons/vector.svg';

export default defineComponent({
  name: 'OfferingsComponent',
  components: {
    OfferingCard,
  },
  data() {
    return {
      offerings: [
        {
          imageSrc: mutuelleImage,
          iconSrc: mutuelleIcon, // Icon for the MUTUELLE card
          title: 'MUTUELLE',
          description: 'Des garanties qui s\'adaptent à vos besoins et des services qui font clairement la différence au quotidien.',
        },
        {
          imageSrc: prevoyanceImage,
          iconSrc: prevoyanceIcon,
          title: 'PRÉVOYANCE',
          description: 'Faire face aux imprévus de la vie en vous assurant des revenus complémentaires (Arrêt de travail, Invalidité, Décès).',
        },
        {
          imageSrc: assuranceImage,
          iconSrc: assuranceIcon,
          title: 'ASSURANCE EMPRUNTEUR',
          description: 'Economiser jusqu\'à 40% en changeant l\'assurance de votre crédit immobilier.',
        },
        {
          imageSrc: perImage,
          iconSrc: perIcon,
          title: 'PER RETRAITE',
          description: 'Préparer sa retraite avec un revenu complémentaire tout en réduisant vos impôts.',
        },
      ],
    };
  },
});
</script>
