<template>
  <div class="header-container">
    <div class="contact-bar">
      <div class="contact-info">
        <i class="fas fa-phone phone-icon"></i>
        <span class="phone-number">06 82 53 22 41</span>
      </div>
    </div>
    </div>
    <nav class="nav-container">
      <ul class="nav-list">
        <li>
          <a href="/" aria-label="Home">
            <img loading="lazy" src="../assets/images/axax logo.png" class="company-logo" alt="Company logo" />
          </a>
        </li>
        <li>
          <a href="/" class="nav-link">ACCUEIL</a>
        </li>
        <li>
          <a href="/prevoyance" class="nav-link">PREVOYANCE</a>
        </li>
        <li>
          <a href="/mutuelle" class="nav-link">MUTUELLE</a>
        </li>
        <li>
          <a href="/assurance-emprenteur" class="nav-link">ASSURANCE EMPRENTEUR</a>
        </li>
        <li>
          <a href="/per-retraite" class="nav-link">PER RETRAITE</a>
        </li>
        <li>
          <a href="/contact" class="nav-link">CONTACT</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import '../assets/NavigationBar.css';
  
  export default defineComponent({
    name: 'NavigationBar',
  });
  </script>
  