document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Función para permitir solo letras y espacios
    function restringirLetras(campo) {
        campo.addEventListener("keypress", function (event) {
            const key = event.key;
            if (!/^[a-zA-ZÀ-ÿ\s]$/.test(key)) {
                event.preventDefault(); // Evita que se escriban números o caracteres especiales
            }
        });

        campo.addEventListener("input", function () {
            this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Borra cualquier número o carácter inválido
        });
    }

    // Aplica la restricción a los campos de nombre y apellidos
    restringirLetras(document.getElementById("nombre"));
    restringirLetras(document.getElementById("apellidoPaterno"));
    restringirLetras(document.getElementById("apellidoMaterno"));

    // Restricción: Número de empleado (solo 8 dígitos numéricos)
    const numeroEmpleado = document.getElementById("numeroEmpleado");
    numeroEmpleado.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 8);
    });

    // Restricción: Número de teléfono (solo 10 dígitos numéricos)
    const numTelefonico = document.getElementById("numTelefonico");
    numTelefonico.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });

    // Restricción: Correo electrónico (validación en tiempo real)
    const email = document.getElementById("email");
    email.addEventListener("input", function () {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        validarCampo(this, pattern);
    });

    // Validación del formulario al enviarlo
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validarFormulario()) {
            alert("Registro exitoso");
            setTimeout(() => {
                location.reload();
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
