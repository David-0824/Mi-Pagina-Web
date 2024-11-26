// Script para manejar el envío del formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar el envío por defecto

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        alert("Gracias, " + name + "! Tu mensaje ha sido enviado.");
        // Aquí podrías enviar el formulario a un servidor en un proyecto real
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
