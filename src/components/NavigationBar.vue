<template>
  <div class="header-container">
    <!-- Contact Bar (Phone Number) -->
    <div class="contact-bar">
      <div class="contact-info">
        <i class="fas fa-phone phone-icon"></i>
        <span class="phone-number">06 82 53 22 41</span>
      </div>
    </div>

    <!-- Transition for Header Minimization -->
    <transition name="expand">
      <div :class="['nav-header', { minimized: isMinimized }]">
        <!-- Logo -->
        <a href="/" aria-label="Home" :class="['logo-container', { minimized: isMinimized }]">
          <img loading="lazy" src="../assets/images/axax logo.png" class="company-logo" alt="Company logo" />
        </a>

        <!-- Desktop Navigation (visible only on desktop) -->
        <ul class="nav-list">
          <li>
            <router-link to="/" class="nav-link" :class="{ active: isActive('/') }">ACCUEIL</router-link>
          </li>
          <li>
            <router-link to="/prevoyance" class="nav-link" :class="{ active: isActive('/prevoyance') }">PRÉVOYANCE</router-link>
          </li>
          <li>
            <router-link to="/mutuelle" class="nav-link" :class="{ active: isActive('/mutuelle') }">MUTUELLE</router-link>
          </li>
          <li>
            <router-link to="/assurance-emprunteur" class="nav-link" :class="{ active: isActive('/assurance-emprunteur') }">ASSURANCE EMPRUNTEUR</router-link>
          </li>
          <li>
            <router-link to="/per-retraite" class="nav-link" :class="{ active: isActive('/per-retraite') }">PER RETRAITE</router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-link" :class="{ active: isActive('/contact') }">CONTACT</router-link>
          </li>
        </ul>

        <!-- Sidebar Toggle Button for Mobile -->
        <button class="sidebar-button" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </transition>

    <!-- Sidebar Menu for Mobile -->
    <nav :class="['sidebar', { 'show-sidebar': isSidebarOpen }]">
      <ul class="sidebar-list">
        <li>
          <router-link to="/" class="sidebar-link" :class="{ active: isActive('/') }">ACCUEIL</router-link>
        </li>
        <li>
          <router-link to="/prevoyance" class="sidebar-link" :class="{ active: isActive('/prevoyance') }">PRÉVOYANCE</router-link>
        </li>
        <li>
          <router-link to="/mutuelle" class="sidebar-link" :class="{ active: isActive('/mutuelle') }">MUTUELLE</router-link>
        </li>
        <li>
          <router-link to="/assurance-emprunteur" class="sidebar-link" :class="{ active: isActive('/assurance-emprunteur') }">ASSURANCE EMPRUNTEUR</router-link>
        </li>
        <li>
          <router-link to="/per-retraite" class="sidebar-link" :class="{ active: isActive('/per-retraite') }">PER RETRAITE</router-link>
        </li>
        <li>
          <router-link to="/contact" class="sidebar-link" :class="{ active: isActive('/contact') }">CONTACT</router-link>
        </li>
      </ul>
    </nav>

    <!-- Background Overlay for Sidebar on Mobile -->
    <div v-if="isSidebarOpen" class="overlay" @click="toggleSidebar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import '../assets/NavigationBar.css'; // Import CSS file here

const isSidebarOpen = ref(false);
const isMinimized = ref(false); // State to track header minimization based on scroll
const route = useRoute();

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Check if a route is active for highlighting
const isActive = (path: string) => {
  return route.path === path;
};

// Handle scroll event
const handleScroll = () => {
  isMinimized.value = window.scrollY > 50; // Adjust threshold as needed
};

// Add event listener on mount and remove on unmount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>