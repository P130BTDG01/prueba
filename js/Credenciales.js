document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtiene los valores ingresados en los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Mostrará el mensaje de error
    const errorMsg = document.getElementById('error-msg');

    // Verifica si el usuario y la contraseña son correctos
    if (username === "admin" && password === "1234") {
        // Muestra un mensaje de éxito y redirige a otra página
        alert("Login exitoso");
        href = "../html/Menu Ad.html";
    } else {
        // Si las credenciales son incorrectas muestra un mensaje de error
        errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
});
