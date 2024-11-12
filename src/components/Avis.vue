<template>

<div class="center-content">
    <!-- Centered Button -->

      <div class="center-row">
        <div class="button">
          <div
            class="embedsocial-hashtag"
            data-ref="a824d4fd2d2b44186c1411d77cf3ea6ef9c1dd3b"
          >
            <a
              class="feed-powered-by-es feed-powered-by-es-badge-img es-widget-branding"
              href="https://embedsocial.com/blog/embed-google-reviews/"
              target="_blank"
              title="Embed Google reviews"
            >
              <img
                src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
                alt="EmbedSocial"
              />
            </a>
          </div>
        </div>
        <a class="button contact-button" href="https://www.google.com/search?sca_esv=2082a285961d999d&sxsrf=ADLYWIKKTt5A0jd38kRg0isbXv4uj78Qnw:1731408153348&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dva1qePjeQe8hELeDTDr7isCJHgjb3_ZJ-0P0FeCQwB1ltFf7xxPZQi1fSm0iPmllGxe_Y1HFipvMP1waOilJQolHB1Jdfd8OyxpmHWAO5avZU2XlvrsXyHZ_lidZe51M7WhxjK7GhUaun6QJgjozRC6LBrm3j3g1yFo6WyGuftlErXbI&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7k6aeJk2cEAFvf1RPqgUlctHBRzz7wCQ8YvZlTdhkB6R8VRjyNub4Qd8IvGb6cQuKHBYkwE%3D&q=EI-+AXA+Pr%C3%A9voyance+%26+Patrimoine+Gildas+Laffaille+Avis&sa=X&ved=2ahUKEwij5cP_zdaJAxVCVKQEHawmI3AQ3PALegQISxAF&biw=1536&bih=695&dpr=1.25" target="_blank" rel="noopener noreferrer">
          Voir les avis Google
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "EmbedSocialReviews",
  mounted() {
    // Check if the script is already loaded
    if (!document.getElementById("EmbedSocialHashtagScript")) {
      // Create a new script element
      const script = document.createElement("script");
      script.id = "EmbedSocialHashtagScript";
      script.src = "https://embedsocial.com/cdn/ht.js";
      script.async = true;

      // Append the script to the head of the document
      document.head.appendChild(script);
    }
  },
};
</script>

<style scoped>
.center-row {
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  height: auto; /* Full viewport height */
  gap: 20px; /* Space between items */
}

.button {
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
