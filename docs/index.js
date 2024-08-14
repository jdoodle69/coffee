var name = document.forms['form']['name'];
var name_error = document.getElementById('name_error');

function validation() {
    if (name.value !== 'Krystel' && name.value !== 'Tel') {
        name_error.textContent = 'Invalid name. Lagay mo yung name mo hahahah.';
        name_error.style.color = 'red';
        return false; // Prevent form submission
    } else {
        name_error.textContent = ''; 
        return true; 
    }
}