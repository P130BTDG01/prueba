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
            // Mostrar ventana flotante "Cargando"
            showLoadingModal();

            // Después de 3 segundos, redirigir al siguiente HTML
            setTimeout(function() {
                console.log("Redirigiendo a Menu.html...");
                window.location.href = "../html/MenuA.html";  // Ajusta si es necesario
            }, 3000);  // 3 segundos
        } else {
            console.log("Credenciales incorrectas");
            errorMsg.textContent = "Usuario o contraseña incorrectos";
            errorMsg.style.color = "red";  // Mantener el color rojo para el error
        }
    });
});

// Función para mostrar la ventana flotante "Cargando"
function showLoadingModal() {
    const modal = document.createElement('div');
    modal.id = 'loadingModal';
    modal.innerHTML = '<p>Cargando...</p>';
    
    document.body.appendChild(modal);
}
