// Función para validar el formulario
function validateForm(event) {
    // Evitamos que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtenemos los valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var fecha = document.getElementById('fecha').value;
    var pais = document.getElementById('pais').value.trim();

    // Validamos cada campo
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (apellido === "") {
        alert("Por favor, ingresa tu apellido.");
        return false;
    }

    if (email === "") {
        alert("Por favor, ingresa tu email.");
        return false;
    }

    // Validación básica de formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return false;
    }

    if (fecha === "") {
        alert("Por favor, selecciona tu fecha de nacimiento.");
        return false;
    }

    if (pais === "") {
        alert("Por favor, ingresa tu país de residencia.");
        return false;
    }

    // Si todas las validaciones pasan, el formulario se envía
    // Si todo está correcto, se envia el formulario
    // document.getElementById("formulario").submit();
    alert("Formulario enviado correctamente!");
    return true;
}

// Escuchamos el evento submit del formulario
document.getElementById("formulario").addEventListener("submit", validateForm);
