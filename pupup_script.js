// Function to toggle the table visibility
function handleButtonClick() {
    const table = document.getElementById('previous_mrl');
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'table'; // Show the table
    } else {
        table.style.display = 'none'; // Hide the table
    }
}

// Function to copy emails to the clipboard
function copyEmailsToClipboard() {
    // Get all email addresses in the table using a class
    const emailLinks = document.querySelectorAll('.email');
    let emailText = '';

    // Loop through all email links and concatenate them
    emailLinks.forEach(function(link) {
        emailText += link.textContent.trim() + '; '; // Append email with a semicolon
    });

    // Clean up the last semicolon
    emailText = emailText.trim().slice(0, -1);

    // Copy the emails to the clipboard
    if (emailText !== '') {
        navigator.clipboard.writeText(emailText).then(function() {
            alert('Emails copied to clipboard: ' + emailText); // Confirmation
        }).catch(function(err) {
            console.error('Error copying text: ', err);
        });
    } else {
        alert('No emails to copy.');
    }
}

// Add event listener for the copy icon
document.addEventListener('DOMContentLoaded', function() {
    const copyIcon = document.getElementById('copy-icon');
    if (copyIcon) {
        copyIcon.addEventListener('click', copyEmailsToClipboard);
    }
});