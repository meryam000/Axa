<template>
    <div v-if="show" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <h2>Mentions Légales</h2>
        <p>Votre Agent général Prévoyance & Patrimoine AXA Clamart Gildas Laffaille<br>32 Rue De Bievres, 92140 Clamart</p>
        <p>LAFFAILLE GILDAS N°ORIAS - <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">https://www.orias.fr</a> : 15000669</p>
        <p>Agent général d'assurance exclusif AXA Prévoyance & Patrimoine. Mandataire exclusif en opérations de banque d'AXA Banque.</p>
        <p>Coordonnées de l'Autorité de contrôle prudentiel et de résolution – 4 pl. de Budapest - CS 92459 - 75436 Paris CEDEX 09.</p>
        <p>Sociétés d'assurance mandantes: AXA France Vie, AXA Assurances Vie Mutuelle, AXA France IARD, et AXA Assurances IARD Mutuelle. Le détail des procédures de recours et de réclamation et les coordonnées du service dédié sont disponibles sur le site <a href="https://www.axa.fr" target="_blank" rel="noopener noreferrer">https://www.axa.fr</a>.</p>
        <p>En matière d'assurance, en cas de non-résolution d'un différend à l'issue du processus de réclamation, vous pouvez avoir recours au Médiateur, en vous adressant à l'association : La Médiation de l'Assurance, TSA 50110, 75441 Paris Cedex 09 - <a href="https://www.mediation-assurance.org" target="_blank" rel="noopener noreferrer">www.mediation-assurance.org</a>.</p>
        <p>Orias - Les Agents AXA sont régis par le code des assurances. Pour plus de détails, consultez le <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer">Code des assurances - Légifrance</a>.</p>
  
        <button @click="close" class="close-button">Fermer</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'LegalModal',
    props: {
      show: {
        type: Boolean as PropType<boolean>,
        required: true
      }
    },
    emits: ['close'],
    methods: {
      close() {
        this.$emit('close');
      }
    }
  });
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    width: 90%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-height: 80vh;
    overflow-y: auto;
  }
  
  .close-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #9b2515;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  