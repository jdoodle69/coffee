var userName = document.forms['form']['name'];
var name_error = document.getElementById('name_error');

function validation(event) {
    event.preventDefault(); 

    if (userName.value !== "Krystel") {
        name_error.textContent = "Invalid name. Lagay mo yung name mo hahahah.";
        name_error.style.color = 'red';
        return false; 
    } else {
        name_error.textContent = ''; 
        window.location.href = "/docs/inv.html"; 
        return true; 
    }
}

document.forms['form'].onsubmit = validation;
