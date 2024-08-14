var userName = document.forms['form']['userName'];
var name_error = document.getElementById('name_error');

function validation() {
    if (userName.value !== 'Krystel') {
        name_error.textContent = 'Invalid name. Lagay mo yung name mo hahahah.';
        name_error.style.color = 'red';
        return false; // Prevent form submission
    } else {
        name_error.textContent = ''; 
        return true; 
    }
}