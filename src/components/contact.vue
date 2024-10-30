<template>
    <div class="ContactUs_contact_us__mCufa contain css-0 snipcss-f5VH1">

        <section class="css-hu14zz">
            <div class="css-126pfwl">
                <h1 class="MuiTypography-root MuiTypography-h3Display css-1wjzfje">Contactez-nous !</h1>
                
                <form action="#">
                    <div class="css-1xs7mmx">
                        <div class="Form_inputWrapper__lis86 css-1vf7t9h"><label class="" for="firstname">Nom * <span class="required"></span></label>
                            <div class="css-0"><input class="" name="firstname" type="text" id="firstname" component="input" placeholder="Votre nom" autocomplete="off" value=""></div>
                        </div>
                        <div class="Form_inputWrapper__lis86 css-1vf7t9h"><label class="" for="lastname">Prénom * <span class="required"></span></label>
                            <div class="css-0"><input class="" name="lastname" type="text" id="lastname" component="input" placeholder="Votre prénom" autocomplete="off" value=""></div>
                        </div>
                    </div>
                    <div class="css-1xs7mmx">
                        <div class="Form_inputWrapper__lis86 css-1vf7t9h"><label class="" for="phonenumber">Téléphone * <span class="required"></span></label>
                            <div class="css-0"><input class="" name="phonenumber" type="tel" id="phonenumber" component="input" placeholder="Votre numéro de téléphone" autocomplete="off" value=""></div>
                        </div>
                        <div class="Form_inputWrapper__lis86 css-1vf7t9h"><label class="" for="email">Adresse e-mail * <span class="required"></span></label>
                            <div class="css-0"><input class="" name="email" type="email" id="email" component="input" placeholder="Votre adresse e-mail" autocomplete="off" value=""></div>
                        </div>
                    </div>
                    <div class="css-1xs7mmx">
                        <div class="Form_inputWrapper__lis86 css-1vf7t9h"><label class="" for="message">Objet * <span class="required"></span></label>
                            <div class="css-0">
                                <input class="" name="message" type="text" component="textarea" rows="8" placeholder="Votre Objet ..." autocomplete="off" value="">
                            </div>
                        </div>
                    </div>
                    <div class="css-1xs7mmx">
                        <div class="Form_inputWrapper__lis86 css-1vf7t9h"><label class="" for="message">Message * <span class="required"></span></label>
                            <div class="css-0">
                                <input class="" name="message" type="text" id="message" component="textarea" rows="8" placeholder="Votre message ..." autocomplete="off" value="">
                            </div>
                        </div>
                    </div>
                    <div class="css-0">
                        <p class="MuiTypography-root MuiTypography-body2 css-1wkru3">Conformément à la loi 09-08, vos données à caractère personnel peuvent à tout moment faire l’objet d’un droit d’accès, de modification, de rectification et d’opposition en s’adressant au : [email de réclamation], ou par courrier à l’adresse suivante : Service réclamations, [Nom de l'entreprise], [adresse anonymisée]. Ce traitement a fait l’objet d’une déclaration auprès de la CNDP sous le numéro [numéro anonymisé], en date du [date anonymisée].</p>
                    </div>
                    <div class="css-fw9znx">
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1br3vpc" tabindex="0" type="submit">Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/contact.css';

export default defineComponent({
  name: 'Contact',
  setup() {
  }
});
</script>
