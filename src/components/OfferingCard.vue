<template>
  <article class="offering-card flex flex-col pb-2 font-bold bg-opacity-0 max-w-[317px] h-[360px]">
    <div class="relative flex flex-col h-full px-4 py-3.5 bg-white rounded-md shadow-[0px_3px_3px_rgba(0,0,0,0.25)]">
      <!-- Dynamic Image (Fixed size with object-cover), displayed only if imageSrc is provided -->
      <img
        v-if="imageSrc"
        loading="lazy"
        :src="imageSrc"
        class="w-full h-[150px] rounded-sm object-cover"
        :alt="title + ' insurance illustration'"
      />

      <!-- Icon positioned in the bottom-left with a hover effect -->
      <div class="icon-container">
        <div class="icon">
          <img :src="iconSrc" alt="Icon" />
        </div>
      </div>

      <!-- Dynamic Title (Centered, Single Line) -->
      <h2 class="mt-8 text-lg text-[#8A7333] text-center h-[35px] whitespace-nowrap overflow-hidden text-ellipsis">
        {{ title }}
      </h2>
      <!-- Dynamic Description (Centered and Consistent Height) -->
      <p class="self-center mt-4 text-xs text-neutral-400 text-center overflow-hidden h-[60px]">
        {{ description }}
      </p>
      <!-- Dynamic Button -->
      <a href="#" class="self-center mt-auto text-lg font-medium text-center text-neutral-700">
        En savoir plus
      </a>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/OfferingCard.css';

export default defineComponent({
  name: 'OfferingCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: false, // Make imageSrc optional
    },
    iconSrc: {
      type: String,
      required: true,
    },
  },
});
</script>
