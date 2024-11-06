// Charger les variables d'environnement depuis le fichier .env
require('dotenv').config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Activer CORS pour l'origine du frontend
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

// Configurer Nodemailer avec les paramètres SMTP de Gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'laffaillegildas@gmail.com', // Compte Gmail
    pass: 'zvqt oqva ofpb qwil',     // Mot de passe de l'application
  },
});

app.options("/send-email", cors()); // Autoriser les requêtes préliminaires

app.post("/send-email", (req, res) => {
  const { firstname, lastname, phonenumber, email, subject, message } = req.body;

  if (!email) {
    return res.status(400).json({ message: "L'email du destinataire est requis." });
  }

  // Définir un modèle HTML élégant pour le corps de l'email, incluant les nouveaux attributs
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #000aff; text-align: center;">Nouvelle Demande de Contact</h2>
      <p style="font-size: 16px;">Vous avez un nouveau message depuis votre formulaire de contact :</p>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Prénom :</strong> ${firstname}</p>
        <p><strong>Nom :</strong> ${lastname}</p>
        <p><strong>Numéro de téléphone :</strong> ${phonenumber}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong></p>
        <p style="font-size: 16px; color: #555; padding: 10px; border-left: 4px solid #000aff; background-color: #fff; border-radius: 8px;">${message}</p>
      </div>
      <p style="font-size: 14px; text-align: center; color: #888;">Merci d'utiliser notre formulaire de contact !</p>

      <!-- Section adresse physique -->
      
      <h1><span style="color: #333399;">Gildas LAFFAILLE</span></h1>
      <p>Agent Général d’assurance Exclusif <strong>AXA Prévoyance & Patrimoine</strong></p>
      <h6><span style="color: #333399;">32 rue de Bièvres - 92140 Clamart</span></h6>
      <h6><span style="color: #333399;"><strong>Tél. :</strong> 06 82 53 22 41 - <strong>Site Web :</strong> <a style="color: #333399;" href="https://agence.axa.fr/ile-de-france/hauts-de-seine/clamart/gildas-laffaille" target="_blank">https://agence.axa.fr/ile-de-france/hauts-de-seine/clamart/gildas-laffaille</a></span></h6>
  
      <div class="footer">
      <h6><span style="color: #333399;">Société d’assurances mandantes: AXA France Vie SA et AXA Assurance Vie Mutuelle</span></h6>
      <h6><span style="color: #333399;">Démarcheur Financier d’AXA France pour l’épargne salariale</span></h6>
      <h6><span style="color: #333399;">Mandataire exclusif en opérations de banque et Agent lié d’AXA Banque</span></h6>
      <h6><span style="color: #333399;">N° ORIAS : 15 000 669 - <a style="color: #333399;" href="https://www.orias.fr" target="_blank">www.orias.fr</a></span></h6>
      <h6><span style="color: #333399;">ACPR – Autorité de contrôle prudentiel et de résolution : 4 Pl de Budapest – CS92459 – 75436 PARIS Cedex 09</span></h6>
      <h6><span style="color: #333399;">Le détail des procédures de recours, de réclamations et les coordonnées du service dédié sont disponibles sur le site <a style="color: #333399;" href="https://www.axa.fr" target="_blank">www.axa.fr</a></span></h6>
      <h6><span style="color: #333399;">En cas de non résolution d’un différend à l’issue du processus de réclamation, vous pouvez avoir recours au Médiateur, en vous adressant à l’association : La Médiation de l’Assurance – TSA 50110 – 75441 PARIS Cedex 9. <a style="color: #333399;" href="https://www.mediation-assurance.org" target="_blank">www.mediation-assurance.org</a></span></h6>
      </div>
    </div>
  `;

  // Configurer les options de l'email
  const mailOptions = {
    from: 'bader.elorche@gmail.com',
    to: 'bader@opencertif.fr',
    subject: `Nouveau message du site AXA ( ${firstname} ${lastname} )`, 
    text: `Prénom : ${firstname}\nNom : ${lastname}\nNuméro de téléphone : ${phonenumber}\nEmail : ${email}\nSujet : ${subject}\nMessage : ${message}\nAdresse : 1234 Main Street, Ville, État 12345, Pays`,
    html: htmlContent,  // Corps HTML
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur d'envoi de l'email :", error);
      return res.status(500).json({ message: "Échec de l'envoi de l'email." });
    } else {
      console.log("Email envoyé :", info.response);
      return res.status(200).json({ message: "Email envoyé avec succès !" });
    }
  });
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
