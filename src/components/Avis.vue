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
        <a class="button contact-button" href="https://www.google.com/search?q=EI-+AXA+Pr%C3%A9voyance+%26+Patrimoine+Gildas+Laffaille+avis+google&oq=EI-+AXA+Pr%C3%A9voyance+%26+Patrimoine+Gildas+Laffaille+avis+google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDQwNTZqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x47e67a73377c8847:0xefd7153188b66ca,1,,,," target="_blank" rel="noopener noreferrer">
          Voir les avis Google
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "EmbedSocialReviews",
  mounted() {
    if (!document.getElementById("EmbedSocialHashtagScript")) {
      const script = document.createElement("script");
      script.id = "EmbedSocialHashtagScript";
      script.src = "https://embedsocial.com/cdn/ht.js";
      script.async = true;
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
