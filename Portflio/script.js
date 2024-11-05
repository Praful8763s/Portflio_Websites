// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(this);

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact_process.php', true); // Update with your PHP file path

    // Handle response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Success: Show response from the PHP file
            document.getElementById('response').innerHTML = xhr.responseText;
            // Optionally reset the form
            document.getElementById('contact-form').reset();
        } else {
            // Error: Handle accordingly
            document.getElementById('response').innerHTML = 'Error occurred while sending your message.';
        }
    };

    // Send the request with the form data
    xhr.send(formData);
});
