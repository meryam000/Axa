<template>
  <section class="accompaniment-section">
    <img src="../assets/images/laptop-blur.jpg" class="background-image" />
    <div class="content-wrapper">
      <div class="content-container">
        <aside class="image-column">
          <figure class="image-wrapper">
            <img src="../assets/images/ext.jpg" class="group-image" />
          </figure>
        </aside>
        <main class="text-column">
          <div class="text-content">
            <h2 class="section-title">Notre accompagnement</h2>
            <hr />
            <p v-html="dynamicText"></p>
            <router-link to="/contact" class="cta-button">DEMANDER UN DEVIS</router-link>
          </div>
        </main>
      </div>
    </div>
    <div class="footer-line"></div>
  </section>
</template>

  
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Acomp',
  setup() {
    const route = useRoute();

    const dynamicText = computed(() => {
      switch (route.name) {
        case 'mutuelle':
          return `
            › Un accompagnement pour le choix des garanties et des formules les plus adaptées à vos besoins.<br><br>
            › Une souscription simple et rapide par signature électronique avec prise en charge des démarches de résiliation auprès de votre ancienne mutuelle.<br><br>
            › Un interlocuteur unique et réactif pour le suivi du contrat et la possibilité de modifier chaque année vos garanties.<br><br>
            › Un accès gratuit à différents services (téléconsultation, réseau ITELIS, Hospiway ...).
          `;
        case 'Prevoyance':
          return "La prévoyance doit être la base de votre gestion patrimoniale. Un bilan complet de votre situation personnelle et professionnelle nous permettra de vous conseiller des solutions spécifiques et adaptées à vos objectifs et besoins. Nous assurons ensuite un suivi régulier de votre contrat afin de vous accompagner au mieux dans l’évolution de votre situation.";
        case 'enprunteur':
        return `
            Nous vous accompagnons de la demande de changement du contrat d’assurance emprunteur jusqu’à la mise en place de la nouvelle assurance.<br><br>
            › Simulation rapide<br>
            › Conseil d’un expert Assurance emprunteur<br>
            › Jusqu’à 50% d’économies possibles
          `;
        case 'retraite':
          return "Nous vous accompagnons de la mise en place du contrat PER jusqu'à la sortie en capital et/ou rente à la retraite.<br><br>› Simulation retraite<br>› Calcul du plafond fiscal (Madelin/Fillon)<br>› Optimisation fiscale";
        default:
          return "Nous vous accompagnons de manière personnalisée en fonction de vos besoins.";
      }
    });

    return {
      dynamicText
    };
  },
});
</script>

  
  <style scoped>
  .accompaniment-section {
    position: relative;
    width: 100%;
    padding-top: 112px;
    height: 30%;
    padding-bottom: 0px;
  }
  
  p{
    padding-top: 30px;
    color:white;
    text-align: left;
  }
  
  .background-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    filter: blur(1px);
  }
  
  .content-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 980px;
  }
  
  .content-container {
    display: flex;
    gap: 20px;
  }
  
  .image-column {
    width: 37%;
  }
  
  .image-wrapper {
    background-color: transparent;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 5px 6px;
  }
  
  .group-image {
    aspect-ratio: 0.75;
    object-fit: contain;
    object-position: center;
    width: 100%;
    border-radius: 7px;
  }
  
  .text-column {
    width: 63%;
  }
  
  .text-content {
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
  }
  
  .section-title {
    color: white;
    font-size: 48px;
    margin: 0;
  }
  
  .decorative-image {
    aspect-ratio: 21.28;
    object-fit: contain;
    object-position: center;
    width: 236px;
    align-self: center;
    margin: 17px 0 0 12px;
  }
  
  .feature-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding-left: 28px;
    margin-top: 34px;
    font-size: 19px;
  }
  
  .feature-item {
    color: #e9f1f2;
    text-align: center;
    margin-bottom: 27px;
  }

  
  .cta-button {
    background-color: #9b2515;
    align-self: center;
    max-width: 100%;
    font-size: 16px;
    color: #f2e4e2;
    font-weight: 600;
    padding: 26px 45px;
    border: none;
    cursor: pointer;
    margin: 18px 0 0 13px;
  }
  
  .footer-line {
    background-color: #4f445e;
    height: 3px;
    margin-top: 152px;
  }
  
  @media (max-width: 991px) {
    .accompaniment-section {
      max-width: 100%;
      padding-top: 100px;
    }
  
    .content-container {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }
  
    .image-column,
    .text-column {
      width: 100%;
    }
  
    .image-wrapper {
      margin-top: 40px;
    }
  
    .text-content {
      margin-top: 40px;
    }
  
    .section-title {
      max-width: 100%;
      margin-right: 10px;
      font-size: 40px;
    }
  
    .feature-list {
      max-width: 100%;
      padding-left: 20px;
    }
  
    .feature-item:last-child {
      max-width: 100%;
      margin-right: 10px;
    }
  
    .cta-button {
      padding: 26px 20px;
      width: 60%;
    }
  
    .footer-line {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  </style>