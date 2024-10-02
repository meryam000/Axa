
  <template>
    <section class="hero-section">
      <div class="hero-content">
        <img
          loading="lazy"
          src="../assets/images/paris.webp"
          alt=""
          class="hero-background"
        />
        <!-- Content -->
        <div class="hero-text-container">
          <header class="hero-header">
            <h1 class="company-name">Cabinet Gildas Laffaille</h1>
            <p class="company-subtitle">AXA Prévoyance & Patrimoine</p>
          </header>
          <hr class="border-0 h-[2.5px] w-full max-w-[500px] bg-[#9e827b] mb-5">
          <div class="hero-titles">
          <h2 >Prévoyance</h2>
          <h2 >Mutuelle</h2>
          <h2 >Retraite</h2>
          </div>
          <hr class="border-0 h-[2.5px] w-full max-w-[500px] bg-[#9e827b] mt-5">
          <div class="hero-cta-container">
            <p class="hero-description">
              Protection sociale et gestion de patrimoine pour les Particuliers,
              Professions libérales ou Entreprises.
            </p>
            <button class="cta-button">DEMANDER UN DEVIS</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import '../assets/welcome.css';
  
  export default defineComponent({
    name: 'Welcome',
  });
  </script>
  