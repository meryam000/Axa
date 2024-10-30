<template>
  <section class="statistics-section" ref="statisticsSection">
    <div class="statistics-container">
      <div class="stat-item">
        <img loading="lazy" src="../assets/icons/stat1.svg" alt="icon" class="stat-icon" />
        <h2 class="stat-value">{{ currentValue1 }}</h2>
        <p class="stat-label">Ans d'expertise</p>
      </div>
      <div class="stat-item">
        <img loading="lazy" src="../assets/icons/stat2.svg" alt="icon" class="stat-icon" />
        <h2 class="stat-value">{{ currentValue2 }}</h2>
        <p class="stat-label">Adhérents</p>
      </div>
      <div class="stat-item">
        <img loading="lazy" src="../assets/icons/stat3.svg" alt="icon" class="stat-icon" />
        <h2 class="stat-value">{{ currentValue3 }}</h2>
        <p class="stat-label">Adhésions</p>
      </div>
    </div>
  </section>
</template>

  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import '../assets/stats.css';


  
  export default defineComponent({
    name: 'Stats',
    setup() {
      const currentValue1 = ref(0);
      const currentValue2 = ref(0);
      const currentValue3 = ref(0);
      const hasAnimated = ref(false);
      const statisticsSection = ref<HTMLElement | null>(null);
  
      const targetValue1 = 23;
      const targetValue2 = 705485;
      const targetValue3 = 1009799;
  
      // Function for the count-up animation
      const countUp = (currentValue: any, targetValue: number, duration: number) => {
        const increment = Math.ceil(targetValue / (duration / 130));
        const interval = setInterval(() => {
          if (currentValue.value < targetValue) {
            currentValue.value = Math.min(currentValue.value + increment, targetValue);
          } else {
            clearInterval(interval);
          }
        }, 50);
      };
  
      // Function to trigger the animation
      const triggerAnimation = () => {
        if (!hasAnimated.value) {
          countUp(currentValue1, targetValue1, 2000);
          countUp(currentValue2, targetValue2, 3000);
          countUp(currentValue3, targetValue3, 3000);
          hasAnimated.value = true; 
        }
      };
  
      const createObserver = () => {
        if (statisticsSection.value) {
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                triggerAnimation();
                observer.unobserve(statisticsSection.value!);
              }
            },
            { threshold: 0.5 }
          );
          observer.observe(statisticsSection.value);
        }
      };
  
      onMounted(() => {
        createObserver();
      });
  
      return { currentValue1, currentValue2, currentValue3, statisticsSection };
    },
  });
  </script>
  
 
  