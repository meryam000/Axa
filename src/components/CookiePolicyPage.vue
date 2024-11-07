<template>
    <div class="cookie-policy-page">
      <CookiePolicyComponent />
    </div>
  </template>
  
  <script>
  import CookiePolicyComponent from '../components/CookiePolicyComponent.vue';
  
  export default {
    name: 'CookiePolicyPage',
    components: {
      CookiePolicyComponent
    }
  };
  </script>
  
  <style scoped>
  .cookie-policy-page {
    padding: 2rem;
  }
  </style>
  