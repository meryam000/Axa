<template>
  <section class="prevoyance-hero">
    <div class="prevoyance-hero-container">
      <div class="prevoyance-content-wrapper">
        <article class="prevoyance-hero-content">
          <img loading="lazy" src="../assets/images/prevoyance1.jpeg" class="prevoyance-hero-background" />
          <div class="prevoyance-text-content">
            <h1 class="prevoyance-title">ASSURANCE PREVOYANCE CAP AGIPI AXA</h1>
            <h2 class="prevoyance-subtitle">Prévoyance des TNS, Professions libérales, Chefs d' Entreprise</h2>
            <hr class="custom-hr">
            <h3 class="prevoyance-main-heading">PRÉVOYANCE INDÉPENDANTS<br />AXA AGIPI</h3>
            <div class="transparent-bg">
              <img loading="lazy" src="../assets/icons/prevoyance-icon.svg" class="prevoyance-insurance-icon" />
              <p class="prevoyance-description">
                L'assurance Prévoyance Indépendants AXA AGIPI vous permet de bénéficier de revenus complémentaires en cas d'incapacité de travail, d'invalidité et de décès.<br /> <br>
                Le contrat complète ainsi les remboursements prévus par votre régime obligatoire.
              </p>
            </div>
            <router-link to="/contact">
              <button class="prevoyance-cta-button">
                <span class="prevoyance-button-text">DEMANDER UN DEVIS</span>
              </button>
            </router-link>
          </div>
        </article>
      </div>
      
      <PointsCle/>
    </div>
    <h1 class="title-keys">Assurance Prévoyance : qui est concerné ?
    </h1>
    <h2 class="tit">Indépendants, Professions libérales , TNS et même les salariés </h2>
    <div class="prevoyance-content">
  <div class="text-image-container">
    <div class="image-button-container">
      <img src="../assets/images/prev-pics.png" alt="Prevoyance Image" class="description-image">
      <router-link to="/contact">
        <button class="cta-button" tabindex="0">DEMANDER UN DEVIS</button>
      </router-link>
    </div>
    <p class="description-text">
      Les indépendants, TNS et professions libérales sont les premiers concernés car la couverture de leur régime obligatoire est bien plus faible que celles des salariés. C'est pourquoi il est nécessaire de compléter les garanties de base par une bonne prévoyance individuelle.
    </p>
  </div>
</div>
<h1 class="title-keys">La prévoyance AXA AGIPI offre des garanties complémentaires uniques sur le marché</h1>
    <div class="columns-container">
      <div class="column">
        <ul class="list-items">
          <li>Un barème par profession</li>
          <li>Forfait Maternité</li>
          <li>Psychologique et dos</li>
          <li>Les violences intrafamiliales</li>
        </ul>
      </div>
      <div class="column">
        <ul class="list-items">
          <li>Prestations forfaitaires pour les IJ</li>
          <li>Remboursement des frais professionnels</li>
          <li>Exonération des cotisations</li>
        </ul>
      </div>
      <div class="column">
        <ul class="list-items">
          <li>Rente éducation</li>
          <li>Capital maladie grave</li>
          <li>Délai de rechute</li>
        </ul>
      </div>
    </div>
    <h1 class="title-keys">Votre contrat Prévoyance multi-récompensé</h1>
    <div class="prevoyance-content">
  <div class="text-image-container">
    <div class="image-button-container">
      <img src="../assets/images/prev-badge.jpg" alt="Prevoyance Image" class="description-image">
    </div>
    <p class="description-text">
      <strong>En optant pour le CAP, vous accédez à un contrat distingué par la profession et récompensé à plusieurs reprises pour la qualité de ses prestations.</strong>
      Le CAP a reçu l’Oscar du meilleur contrat de Prévoyance Madelin par Gestion de Fortune, le Label d'excellence dans la catégorie Prévoyance Madelin des Dossiers de l'Épargne et le Label Sélection Premium « Prévoyance Madelin » du site Good Value for Money.    </p>
  </div>
</div>
<div class="prevoyance-content">
  <div class="text-image-container">
    <div class="image-button-container">
      <img src="../assets/images/agipi.jpg" alt="Prevoyance Image" class="description-image">
    </div>
    <h1 class="tit">Un partenaire exclusif, l’association AGIPI
    </h1>

  </div>
</div>
  </section>
  <Stats/>
  <Acomp/>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/prevoyance.css';
import PointsCle from './points-cle.vue';
import Acomp from './Accompagnement.vue';
import Stats from './Stats.vue';

export default defineComponent({
  name: 'Prevoyance',
  components: {
    PointsCle,
    Acomp,
    Stats,
  },
  setup() {
  },
});
</script>
