<?php
// Load Composer's autoloader for PHPMailer
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Set up CORS headers to allow requests from your frontend
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Headers: Content-Type");
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve JSON payload
    $data = json_decode(file_get_contents("php://input"), true);
    
    $firstname = $data['firstname'] ?? '';
    $lastname = $data['lastname'] ?? '';
    $phonenumber = $data['phonenumber'] ?? '';
    $email = $data['email'] ?? '';
    $subject = $data['subject'] ?? '';
    $message = $data['message'] ?? '';

    if (!$email) {
        http_response_code(400);
        echo json_encode(["message" => "L'email du destinataire est requis."]);
        exit;
    }

    $mail = new PHPMailer(true);
    
    try {
        // SMTP Configuration for Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'laffaillegildas@gmail.com';
        $mail->Password = 'zvqt oqva ofpb qwil';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        
        // Email Settings
        $mail->setFrom('bader.elorche@gmail.com', 'AXA Contact');
        $mail->addAddress('bader@opencertif.fr');
        $mail->isHTML(true);
        $mail->Subject = "Nouveau message du site AXA ( $firstname $lastname )";
        
        $htmlContent = "
            <div style='font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;'>
                <h2 style='color: #000aff; text-align: center;'>Nouvelle Demande de Contact</h2>
                <p style='font-size: 16px;'>Vous avez un nouveau message depuis votre formulaire de contact :</p>
                <div style='background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;'>
                    <p><strong>Prénom :</strong> $firstname</p>
                    <p><strong>Nom :</strong> $lastname</p>
                    <p><strong>Numéro de téléphone :</strong> $phonenumber</p>
                    <p><strong>Email :</strong> $email</p>
                    <p><strong>Sujet :</strong> $subject</p>
                    <p><strong>Message :</strong></p>
                    <p style='font-size: 16px; color: #555; padding: 10px; border-left: 4px solid #000aff; background-color: #fff; border-radius: 8px;'>$message</p>
                </div>
                <p style='font-size: 14px; text-align: center; color: #888;'>Merci d'utiliser notre formulaire de contact !</p>
                <!-- Physical Address Section -->
                <h1><span style='color: #333399;'>Gildas LAFFAILLE</span></h1>
                <p>Agent Général d’assurance Exclusif <strong>AXA Prévoyance & Patrimoine</strong></p>
                <h6><span style='color: #333399;'>32 rue de Bièvres - 92140 Clamart</span></h6>
                <h6><span style='color: #333399;'>Tél. : 06 82 53 22 41 - Site Web : <a style='color: #333399;' href='https://agence.axa.fr/ile-de-france/hauts-de-seine/clamart/gildas-laffaille' target='_blank'>https://agence.axa.fr/ile-de-france/hauts-de-seine/clamart/gildas-laffaille</a></span></h6>
                <div class='footer'>
                    <!-- Footer content here -->
                </div>
            </div>";
        
        $mail->Body = $htmlContent;
        $mail->AltBody = "Prénom : $firstname\nNom : $lastname\nNuméro de téléphone : $phonenumber\nEmail : $email\nSujet : $subject\nMessage : $message";

        $mail->send();
        
        echo json_encode(["message" => "Email envoyé avec succès !"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["message" => "Échec de l'envoi de l'email.", "error" => $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Méthode non autorisée"]);
}
?>
