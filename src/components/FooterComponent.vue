<template>
  <footer class="flex overflow-hidden flex-col bg-[#00008F]">
    <div class="flex flex-col pt-8 w-full bg-black bg-opacity-0 max-md:max-w-full">
      <div class="flex flex-col justify-center items-center px-16 py-9 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div class="max-w-full w-[961px]">
          <div class="flex gap-5 max-md:flex-col">
            <section class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow font-semibold max-md:mt-10">
                <div class="flex flex-col items-start pl-1.5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/683529e4b7574224fb5466d53d9bda7e9c74c082b9c4b2055d9839fd260c3eaa?placeholderIfAbsent=true&apiKey=d1f111f51c1d47fba0386534ec896743" alt="" class="object-contain rounded-xl aspect-[0.98] w-[62px]" />
                  <h1 class="company-name mt-6">Cabinet Gildas Laffaille</h1>
                      <p class="company-subtitle mb-0">AXA Prévoyance & Patrimoine</p>
                  <p class="self-stretch mt-10 text-base text-slate-300 text-left">
                    Pour vous et vos proches, votre<br />conseiller AxA vous accompagne au<br />quotidien, par telephone, dans la<br />gestion de votre contrat et pour<br />répondre à toutes vos questions.
                  </p>
                </div>
                <a href="#" class="flex flex-col px-1 mt-10 max-w-full text-sm text-center bg-white rounded-3xl border border-indigo-800 border-solid text-stone-400 w-[232px] max-md:mt-10 h-12">
                  <span class="z-10 px-10 py-6 -mt-5 bg-black bg-opacity-0 max-md:px-5">
                    DEMANDER UN DEVIS
                  </span>
                </a>
              </div>
            </section>
            <nav class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start self-stretch my-auto font-semibold max-md:mt-10">
                <h3 class="text-sm text-slate-200">NOS OFFRES</h3>
                <ul class="mt-9 text-xs text-slate-400 text-left">
                  <li>Mutuelle AXA</li>
                  <li>Prévoyance</li>
                  <li>Assurance Emprunteur</li>
                  <li>PER Retraite</li>
                </ul>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b73d5be2a4befdbb509f16a81b4c496e38574001c3f93058ed87bb0c883cfba?placeholderIfAbsent=true&apiKey=d1f111f51c1d47fba0386534ec896743" alt="" class="object-contain mt-28 w-8 aspect-square max-md:mt-10" />
                <a href="#" class="mt-12 text-xs text-slate-500 max-md:mt-10">
                  Mentions legales
                </a>
                <a href="#" class="mt-5 text-xs text-slate-500">
                  Politique de cookies (UE)
                </a>
                <p class=" text-left mt-7 text-xs text-slate-500">
                  Agence AXA Gildas Laffaille 2024 - Créé par <a href="https://www.opencertif.fr">OpenCertif</a> 
                </p>
              </div>
            </nav>
            <section class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start mt-3 w-full font-semibold max-md:mt-10">
                <h3 class="text-sm text-gray-200">LIGNE DIRECT</h3>
                <a href="tel:0682532241" class="mt-7 text-3xl text-stone-400">06 82 53 22 41</a>
                <div class="flex gap-3.5 mt-9 text-sm text-gray-100 whitespace-nowrap max-md:mt-10 max-md:ml-0.5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa40c607533bbfb1361c1b851b61353c09d9a6d2f67c80fe57cdb09a4ca62c4?placeholderIfAbsent=true&apiKey=d1f111f51c1d47fba0386534ec896743" alt="" class="object-contain shrink-0 aspect-square w-[29px]" />
                  <h4 class="self-start">HORAIRES</h4>
                </div>
                <p class="mt-4 text-xs text-slate-400 text-left ml-4">
                  Lundi : 09h00 - 13h00 et 14h00 - 19h00 (sur RDV) <br>
                  Mardi : 09h00 - 13h00 et 14h00 - 20h00 (sur RDV) <br>
                  Mercredi : 09h00 - 13h00 et 14h00 - 19h00 (sur RDV) <br>
                  Jeudi : 09h00 - 13h00 et 14h00 - 20h00 (sur RDV) <br>
                  Vendredi : 09h00 - 13h00 et 14h00 - 19h00 (sur RDV) <br>
                  Samedi : Fermé                  </p>
                <div class="flex gap-3.5 mt-12 text-sm text-gray-200 whitespace-nowrap max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c73d64f77a69bbb5fbf50f4a11166cb3f1878426b5f3021e5c01f7fa066b4ce?placeholderIfAbsent=true&apiKey=d1f111f51c1d47fba0386534ec896743" alt="" class="object-contain shrink-0 aspect-[1.35] w-[31px]" />
                  <h4 class="self-start">EMAIL</h4>
                </div>
                <a href="mailto:agencea2p.gildas.lafaille@axa.fr" class="mt-8 text-sm text-slate-300 text-left">
                  agencea2p.gildas.lafaille@axa.fr
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
});
</script>

<style>
.self-start {
  color: #FFF;
}
</style>