<template>
    <div class="ContactUs_contact_us__mCufa contain css-0 snipcss-f5VH1">
      <section class="css-hu14zz">
        <div class="css-126pfwl">
          <h1 class="MuiTypography-root MuiTypography-h3Display css-1wjzfje">Contactez-nous !</h1>
  
          <form @submit.prevent="sendEmail">
            <div class="css-1xs7mmx">
              <div class="Form_inputWrapper__lis86 css-1vf7t9h">
                <label for="firstname">Nom * <span class="required"></span></label>
                <div class="css-0">
                  <input
                    name="firstname"
                    type="text"
                    id="firstname"
                    v-model="form.firstname"
                    placeholder="Votre nom"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div class="Form_inputWrapper__lis86 css-1vf7t9h">
                <label for="lastname">Prénom * <span class="required"></span></label>
                <div class="css-0">
                  <input
                    name="lastname"
                    type="text"
                    id="lastname"
                    v-model="form.lastname"
                    placeholder="Votre prénom"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
            </div>
  
            <div class="css-1xs7mmx">
              <div class="Form_inputWrapper__lis86 css-1vf7t9h">
                <label for="phonenumber">Téléphone * <span class="required"></span></label>
                <div class="css-0">
                  <input
                    name="phonenumber"
                    type="tel"
                    id="phonenumber"
                    v-model="form.phonenumber"
                    placeholder="Votre numéro de téléphone"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div class="Form_inputWrapper__lis86 css-1vf7t9h">
                <label for="email">Adresse e-mail * <span class="required"></span></label>
                <div class="css-0">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    v-model="form.email"
                    placeholder="Votre adresse e-mail"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
            </div>
  
            <div class="css-1xs7mmx">
              <div class="Form_inputWrapper__lis86 css-1vf7t9h">
                <label for="subject">Objet * <span class="required"></span></label>
                <div class="css-0">
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    placeholder="Votre Objet ..."
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
            </div>
  
            <div class="css-1xs7mmx">
              <div class="Form_inputWrapper__lis86 css-1vf7t9h">
                <label for="message">Message * <span class="required"></span></label>
                <div class="css-0">
                  <textarea
                    name="message"
                    id="message"
                    v-model="form.message"
                    placeholder="Votre message ..."
                    rows="4"
                    autocomplete="off"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
  
            <div class="css-0"> <br>
              <h1 class="text-sm">informations obligatoires *</h1>
              <p class="text-sm bold">
                Toutes les informations sont confidentielles et non diffusées à des tiers. Vous serez contacté uniquement pour votre demande. Vos
                coordonnées sont utilisées à cette seule finalité et ne sont pas conservées par la suite, conformément à la réglementation RGPD.              </p>
            </div>
  
            <div class="css-fw9znx">
              <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1br3vpc" tabindex="0" type="submit">
                Envoyer
              </button>
            </div>
          </form>
  
          <div v-if="statusMessage" :class="['status-message', { error: statusMessage.includes('Erreur') }]">
            {{ statusMessage }}
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import '../assets/contact.css';
  
  export default defineComponent({
    name: 'Contact',
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          phonenumber: '',
          email: '',
          subject: '',
          message: '',
        },
        statusMessage: '',
      };
    },
    methods: {
      async sendEmail() {
        try {
          const response = await fetch("https://prevoyance-mutuelle-retraite-92.com/php/index.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.form),
          });
  
          const result = await response.json();
  
          if (response.ok) {
            this.statusMessage = result.message;
            setTimeout(() => {
              this.statusMessage = ''; // Clear message after 5 seconds
            }, 5000);
            this.form = { firstname: '', lastname: '', phonenumber: '', email: '', subject: '', message: '' }; // Reset form on success
          } else {
            this.statusMessage = `Erreur: ${result.message}`;
            setTimeout(() => {
              this.statusMessage = ''; // Clear message after 5 seconds
            }, 5000);
          }
        } catch (error: any) {
          this.statusMessage = `Échec de l'envoi de l'email : ${error.message}`;
          setTimeout(() => {
            this.statusMessage = ''; // Clear message after 5 seconds
          }, 5000);
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .status-message {
    margin-top: 1rem;
    padding: 1rem;
    color: #ffffff;
    background-color: #4caf50; /* Green for success */
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
  }
  
  .status-message.error {
    background-color: #f44336; /* Red for errors */
  }
  </style>
  