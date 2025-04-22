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

       
        showLoadingModal();

        
        setTimeout(() => {
            
            if (username === "admin" && password === "1234") {
                console.log("Redirigiendo a Menu.html...");
                window.location.href = "../html/MenuA.html";  
            }
            // Segundo conjunto de credenciales
            else if (username === "usuario" && password === "7894") {
                console.log("Redirigiendo a MenuB.html...");
                window.location.href = "../html/MenuB.html";  
            } else {
                console.log("Credenciales incorrectas");
                errorMsg.textContent = "Usuario o contraseña incorrectos";
                hideLoadingModal();
            }
        }, 3000); 
    });

   
    function showLoadingModal() {
        const modal = document.createElement('div');
        modal.id = 'loadingModal';
        modal.innerHTML = '<p>Cargando...</p>';
        document.body.appendChild(modal);
    }

   
    function hideLoadingModal() {
        const modal = document.getElementById('loadingModal');
        if (modal) {
            modal.remove();
        }
    }
});
