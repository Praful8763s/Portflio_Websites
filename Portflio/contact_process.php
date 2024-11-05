\<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect and sanitize input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Here, you can process the data (e.g., send an email, store in a database, etc.)
    // Example: sending an email (make sure your server is configured for sending emails)
    $to = 'your-email@example.com'; // Update with your email address
    $subject = 'New Contact Message';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your message!';
    } else {
        echo 'There was a problem sending your message. Please try again later.';
    }
} else {
    echo 'Invalid request.';
}
?>
