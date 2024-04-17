<?php
// Controleer of het formulier is verzonden
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verzamel de ingevulde gegevens van het formulier
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comment = $_POST['comment'];

    // Stel het e-mailadres in waarnaar het bericht moet worden verzonden
    $to = "gyzyto187@gmail.com";

    // Stel het onderwerp van het e-mailbericht in
    $subject = "Contactformulier van $name";

    // Bouw het bericht op met de ingevulde gegevens
    $message = "Naam: $name\n";
    $message .= "E-mailadres: $email\n";
    $message .= "Telefoonnummer: $phone\n";
    $message .= "Bericht:\n$comment";

    // Stel de headers in voor het e-mailbericht
    $headers = "From: $email";

    // Verstuur het e-mailbericht
    if (mail($to, $subject, $message, $headers)) {
        // Bericht succesvol verzonden
        echo json_encode(array("status" => "success"));
    } else {
        // Er is een fout opgetreden bij het verzenden van het bericht
        echo json_encode(array("status" => "error"));
    }
} else {
    // Als het formulier niet is verzonden, geef een foutmelding terug
    echo json_encode(array("status" => "error", "message" => "Het formulier is niet verzonden."));
}
?>
