<template>
  <section class="optimization-services">
    <header class="text-center px-6 md:px-0">
      <h1 class="flex flex-col items-center justify-center w-full mt-8 text-3xl font-bold text-center text-neutral-700">
        Les partenaires AXA Prévoyance & Patrimoine 
      </h1>
    </header>

    <div class="partners-carousel">
      <div class="partners-logos-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img
          v-for="(logo, index) in logos"
          :key="index"
          :src="logo"
          alt="Partner Logo"
          class="partner-logo"
        />
      </div>
      <div class="carousel-controls">
        <button class="control-button" @click="prevImage">❮</button>
        <button class="control-button" @click="nextImage">❯</button>
      </div>
    </div>

    <!-- Desktop logos -->
    <div class="partners-logos-desktop">
      <img src="../assets/images/axa_prive.jpg" alt="AXA Prive" />
      <img src="../assets/images/logo_agipi_svg.svg" alt="AGIPI" />
      <img src="../assets/images/APRS 1.png" alt="APRS" />
      <img src="../assets/images/axa_banque.png" alt="AXA Banque" />
      <img src="../assets/images/itelis.png" alt="Itelis" />
      <img src="../assets/images/anpere.png" alt="Anpere" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Partenaire',
  setup() {
    const logos = [
      '/src/assets/images/axa_prive.jpg',
      '/src/assets/images/logo_agipi_svg.svg',
      '/src/assets/images/APRS 1.png',
      '/src/assets/images/axa_banque.png',
      '/src/assets/images/itelis.png',
      '/src/assets/images/anpere.png',
    ];
    
    const currentIndex = ref(0);

    const nextImage = () => {
      if (currentIndex.value < logos.length - 1) {
        currentIndex.value++;
      } else {
        currentIndex.value = 0; // Loop back to the first image
      }
    };

    const prevImage = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      } else {
        currentIndex.value = logos.length - 1; // Loop to the last image
      }
    };

    return {
      logos,
      currentIndex,
      nextImage,
      prevImage,
    };
  },
});
</script>

<style scoped>
.optimization-services {
  padding: 2rem 0; /* Optional: Add some padding for the section */
}

/* Mobile carousel */
.partners-carousel {
  overflow: hidden; /* Hide overflow */
  position: relative; /* Allow absolute positioning for controls */
  display: none;
}

.partners-logos-container {
  display: flex; /* Align logos in a row */
  transition: transform 0.5s ease-in-out; /* Smooth transition for movement */
}

.partner-logo {
  width: 100%;
  height: 60px;
  flex: 0 0 auto;
}

@media (max-width: 767px) {
  .partner-logo {
    width: 100%;
    height: 160px;
    flex: 0 0 auto;
  }
}

/* Control buttons */
.carousel-controls {
  display: flex;
  justify-content: center; /* Center align controls */
  margin-top: 1rem; /* Space above the controls */
}
/* Desktop logos */
.partners-logos-desktop {
  display: flex; /* Use flexbox to align logos */
  justify-content: center; /* Center align logos */
  gap: 3rem; /* Space between logos */
}
.control-button {
  background-color: #00008F; /* Button color */
  color: #fff; /* Text color */
  border: none;
  padding: 10px;
  margin: 0 10px; /* Space between buttons */
  cursor: pointer;
  border-radius: 5px; /* Rounded corners */
}

/* Show carousel only on mobile devices */
@media (max-width: 767px) {
  .partners-carousel {
    display: block; /* Show carousel on mobile */
  }

  .partners-logos-desktop {
    display: none; /* Hide desktop logos */
  }
}

img {
  max-width: 100%;
  height: 60px;
}
</style>
