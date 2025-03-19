document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');

    if (!loginForm) {
        console.error("No se encontró el formulario con id 'loginForm'.");
        return;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMsg = document.getElementById('error-msg');

        console.log("Usuario ingresado:", username);
        console.log("Contraseña ingresada:", password);

        if (username === "admin" && password === "1234") {
            alert("Login exitoso");
            console.log("Redirigiendo a Menu.html...");
            window.location.href = "../html/Menu Ad.html";  // Ajusta si es necesario
        } else {
            console.log("Credenciales incorrectas");
            errorMsg.textContent = "Usuario o contraseña incorrectos";
        }
    });
});