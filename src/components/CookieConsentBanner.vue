<template>
    <div v-if="showBanner" class="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 z-50 flex justify-between items-center">
      <p>Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre <router-link to="/cookie-policy" class="underline text-axa-grey-light">Politique de cookies (UE)</router-link>.</p>
      <button @click="acceptCookies" class="bg-blue-500 text-white px-4 py-2 rounded">Accepter</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showBanner: !localStorage.getItem('cookiesAccepted')
      };
    },
    methods: {
      acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        this.showBanner = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .fixed {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  