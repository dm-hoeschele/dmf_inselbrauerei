<!-- message send  -->
<h1>Message successfully send!</h1>
<p>Use the back arrow to return to the Website.</p>

<?php

    /* save values of inputs by their name to variables */
    $userName = $_POST['user_name'];
    $userEmail = $_POST['user_email'];
    $userMessage = $_POST['user_message'];

    $to = "hoeschele@digitalmanufaktur.com";
    $subject = "E-Mail von der Inselbrauerei";
    $body = "Übergebene Informationen: ";

    $body .= "\r\n Name: " . $userName;
    $body .= "\r\n E-Mail: " . $userEmail;
    $body .= "\r\n Message: " . $userMessage;
    /* using variables to create email */
    mail($to, $subject, $body);
?>