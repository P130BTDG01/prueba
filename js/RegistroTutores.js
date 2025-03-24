document.addEventListener("DOMContentLoaded", function () {
    // Capturamos el formulario
    const form = document.querySelector("form");

    // Validación del número de empleado (8 dígitos)
    document.getElementById("numeroEmpleado").addEventListener("input", function () {
        const pattern = /^\d{8}$/;
        validarCampo(this, pattern);
    });

    // Validación del número telefónico (10 dígitos)
    document.getElementById("numTelefonico").addEventListener("input", function () {
        const pattern = /^\d{10}$/;
        validarCampo(this, pattern);
    });

    // Validación del correo electrónico (formato correcto)
    document.getElementById("email").addEventListener("input", function () {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        validarCampo(this, pattern);
    });

    // Validación del formulario al enviarlo
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío predeterminado

        if (validarFormulario()) {
            alert("Registro exitoso");
            setTimeout(() => {
                location.reload(); // Recarga la página después de 1.5 segundos
            }, 1500);
        } else {
            alert("Por favor, completa correctamente todos los campos.");
        }
    });
});

// Función para validar un campo con una expresión regular
function validarCampo(input, pattern) {
    if (pattern.test(input.value)) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
    }
}

// Función para validar todo el formulario antes de enviarlo
function validarFormulario() {
    let valido = true;
    const inputs = document.querySelectorAll("input[required], select[required]");

    inputs.forEach(input => {
        if (input.value.trim() === "" || input.classList.contains("error")) {
            valido = false;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });

    return valido;
}
