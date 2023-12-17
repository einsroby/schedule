let isEditMode = false;

function toggleEditMode() {
    if (isEditMode) {
        // If already in edit mode, do nothing
        return;
    }

    // Show the password popup
    document.getElementById('password-popup').style.display = 'block';
}

function authenticate() {
    const password = document.getElementById('password').value;

    // Replace 'your_password' with the actual correct password
    if (password === '96941') {
        isEditMode = true;
        document.getElementById('spreadsheet').src = 'https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=2108901030';
        document.getElementById('password-popup').style.display = 'none';
    } else {
        alert('Authentication failed. Please enter the correct password.');
    }
}

function closePopup() {
    document.getElementById('password-popup').style.display = 'none';
}
