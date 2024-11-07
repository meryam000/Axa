<template>
  <footer class="flex overflow-hidden flex-col bg-[#00008F]">
    <div class="flex flex-col pt-8 w-full bg-black bg-opacity-0 max-md:max-w-full">
      <div class="flex flex-col justify-center items-center px-16 py-9 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div class="max-w-full w-[961px]">
          <div class="flex gap-5 max-md:flex-col">
            <section class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow font-semibold max-md:mt-10">
                <div class="flex flex-col items-start pl-1.5">
                  <img loading="lazy" src="../assets/images/axa_white.png" alt="" class="object-contain rounded-xl aspect-[0.98] w-[62px]" />
                  <h1 class="company-name mt-6">Cabinet Gildas Laffaille</h1>
                      <p class="company-subtitle mb-0">AXA Prévoyance & Patrimoine</p>
                  <p class="self-stretch mt-4 text-base text-slate-300 text-left">
                    Pour vous et vos proches, votre<br />conseiller AxA vous accompagne au<br />quotidien, par telephone, dans la<br />gestion de votre contrat et pour<br />répondre à toutes vos questions.
                  </p>
                </div>
                <router-link to="/contact">
                  <a class="flex flex-col px-1 mt-10 max-w-full text-sm text-center bg-white rounded-3xl border border-indigo-800 border-solid text-stone-400 w-[232px] max-md:mt-10 h-12">
                    <span class="z-10 px-10 py-6 -mt-5 bg-black bg-opacity-0 max-md:px-5">
                      DEMANDER UN DEVIS
                    </span>
                  </a>
                </router-link>
              </div>
            </section>
            <nav class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start self-stretch my-auto font-semibold max-md:mt-10">
                <h3 class="mt-0 text-s text-white">NOS OFFRES</h3>
                <ul class="mt-9 text-s text-white text-left">
                  <li><router-link to="/mutuelle" class="custom-link">Mutuelle AXA</router-link></li>
                  <li><router-link to="/prevoyance" class="custom-link">Prévoyance</router-link></li>
                  <li><router-link to="/assurance-emprunteur" class="custom-link">Assurance Emprunteur</router-link></li>
                  <li><router-link to="/per-retraite" class="custom-link">PER Retraite</router-link></li>
                </ul>
                <a href="https://www.linkedin.com/in/glaffaille/" target="_blank" rel="noopener noreferrer">
  <img loading="lazy" src="../assets/icons/linkedin.svg" alt="LinkedIn" class="object-contain mt-10 w-8 aspect-square max-md:mt-10 filter-white" />
</a>
                <a class="text-xs mt-4 text-slate-500" href="#" @click.prevent="showLegalModal = true">Mentions légales</a>
                <LegalModal :show="showLegalModal" @close="showLegalModal = false" />
                <a class="text-xs text-slate-500 cursor-pointer">
                  <router-link to="/cookie-policy">Politique de cookies (UE)</router-link>
                  </a>

                <p class=" text-left mt-7 text-xs text-slate-500">
                  Agence AXA Gildas Laffaille 2024 - Créé par <a href="https://www.opencertif.fr">OpenCertif</a> 
                </p>
              </div>
            </nav>
            <section class="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start mt-3 w-full font-semibold max-md:mt-10">
                <h3 class="text-s text-white">LIGNE DIRECT</h3>
                <a href="tel:0682532241" class="mt-0 text-3xl text-stone-400">06 82 53 22 41</a>
                <div class="flex gap-3.5 mt-6 text-sm text-gray-100 whitespace-nowrap max-md:mt-10 max-md:ml-0.5">
                  <img loading="lazy" src="../assets/icons/time.svg" alt="" class="object-contain shrink-0 aspect-[1.35] w-[31px] filter-white" />
                  <h3 class="self-start mt-6">HORAIRES</h3>
                </div>
                <p class="mt-4 text-xs text-white text-left ml-4">
                  Lundi : 09h00 - 13h00 et 14h00 - 19h00 (sur RDV) <br>
                  Mardi : 09h00 - 13h00 et 14h00 - 20h00 (sur RDV) <br>
                  Mercredi : 09h00 - 13h00 et 14h00 - 19h00 (sur RDV) <br>
                  Jeudi : 09h00 - 13h00 et 14h00 - 20h00 (sur RDV) <br>
                  Vendredi : 09h00 - 13h00 et 14h00 - 19h00 (sur RDV) <br>
                  Samedi : Fermé                  </p>
                <div class="flex gap-3.5 mt-6 text-sm text-white whitespace-nowrap max-md:mt-10">
                  <img loading="lazy" src="../assets/icons/mail.svg" alt="" class="object-contain shrink-0 aspect-[1.35] w-[31px] filter-white" />
                  <h3 class="self-start mt-4">EMAIL</h3>
                </div>
                <a href="mailto:agencea2p.gildas.laffaille@axa.fr" class="mt-2 text-sm text-white text-left">
                  agencea2p.gildas.laffaille@axa.fr
                </a>
                <h3 class="self-start mt-6">ORIAS: 15000669</h3>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LegalModal from './LegalModal.vue';

export default defineComponent({
  name: 'FooterComponent',
  components: {
    LegalModal
  },
  setup() {
    const showLegalModal = ref(false);
    return { showLegalModal };
  }
}); 
</script>

<style>
.self-start {
  color: #FFF;
}
.filter-white {
  filter: brightness(0) invert(1);
}
.custom-link {
  color: #FFF; /* Change to the color you prefer */
  text-decoration: none;
}

.custom-link:hover {
  color: #c9b085; /* Optional: a different color on hover */
}

</style>