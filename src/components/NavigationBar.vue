<template>
  <div class="header-container">
    <!-- Contact Bar -->
    <div class="contact-bar">
      <div class="contact-info">
        <i class="fas fa-phone phone-icon"></i>
        <span class="phone-number">06 82 53 22 41</span>
      </div>
    </div>

    <!-- Navigation Bar with Logo and Burger Menu -->
    <div class="nav-header">
      <a href="/" aria-label="Home" class="logo-container">
        <img loading="lazy" src="../assets/images/axax logo.png" class="company-logo" alt="Company logo" />
      </a>

      <button class="burger-button" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
    

    <!-- Nav Menu -->
    <nav :class="['nav-container', { 'show-menu': isMenuOpen }]">
      <ul class="nav-list">
        <li><a href="/" class="nav-link">ACCUEIL</a></li>
        <li><a href="/prevoyance" class="nav-link">PREVOYANCE</a></li>
        <li><a href="/mutuelle" class="nav-link">MUTUELLE</a></li>
        <li><a href="/assurance-emprunteur" class="nav-link">ASSURANCE EMPRUNTEUR</a></li>
        <li><a href="/per-retraite" class="nav-link">PER RETRAITE</a></li>
        <li><a href="/contact" class="nav-link">CONTACT</a></li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '../assets/NavigationBar.css';

export default defineComponent({
  name: 'NavigationBar',
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return { isMenuOpen, toggleMenu };
  },
});
</script>
