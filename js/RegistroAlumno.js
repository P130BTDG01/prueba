document.addEventListener("DOMContentLoaded", function () {
    // Función para confirmar antes de regresar
    document.getElementById('cancelarButton').addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        // Mostrar un cuadro de confirmación
        var confirmarCancelacion = confirm("¿Estás seguro de que deseas cancelar el registro?");
        if (confirmarCancelacion) {
            // Si el usuario acepta, regresa al HTML anterior
            window.history.back();
        }
    });

    let fechaInput = document.getElementById("fechaRegistro");
    let fechaActual = new Date().toISOString().split("T")[0];
    fechaInput.value = fechaActual;

    let edadInput = document.getElementById("edad");
    let matriculaInput = document.getElementById("matricula");
    let telefonoInput = document.getElementById("telefono");
    let nombreInput = document.getElementById("Nombres");
    let apellidoPInput = document.getElementById("apellidoPaterno");
    let apellidoMInput = document.getElementById("apellidoMaterno");
    let errorContainer = document.getElementById("errorMessages");

    // Validar que solo se ingresen números en la matrícula
    matriculaInput.addEventListener("keypress", function(event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    });

    // Validar que solo se ingresen números y que sean exactamente 10 dígitos en el teléfono
    telefonoInput.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });

    telefonoInput.addEventListener("blur", function() {
        if (this.value.length !== 10) {
            mostrarMensajeError("El número de teléfono debe tener exactamente 10 dígitos.");
            this.value = "";
        }
    });

    // Validar que solo se ingresen letras en nombre y apellidos
    function validarTexto(event) {
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(event.key)) {
            event.preventDefault();
        }
    }

    nombreInput.addEventListener("keypress", validarTexto);
    apellidoPInput.addEventListener("keypress", validarTexto);
    apellidoMInput.addEventListener("keypress", validarTexto);

    document.getElementById("registroForm").addEventListener("submit", function (event) {
        let matricula = matriculaInput.value;
        let telefono = telefonoInput.value;
        let edad = edadInput.value;
        let semestre = document.getElementById("semestre").value;
        let carrera = document.getElementById("carrera").value;
        let errores = [];

        // Validación de la matrícula
        if (!/^\d{8}$/.test(matricula)) {
            errores.push("La matrícula debe contener exactamente 8 dígitos numéricos.");
        }

        // Validación del teléfono
        if (telefono.length !== 10) {
            errores.push("El teléfono debe contener exactamente 10 dígitos numéricos.");
        }

        // Validación de la edad
        if (!/^[0-9]+$/.test(edad) || edad < 18 || edad > 40) {
            errores.push("La edad debe estar entre 18 y 40 años.");
        }

        // Si hay errores, mostrar los mensajes
        if (errores.length > 0) {
            event.preventDefault();
            mostrarErrores(errores);
        } else {
            errorContainer.classList.remove("show");
        }
    });

    // Función para mostrar los errores
    function mostrarErrores(errores) {
        errorContainer.innerHTML = errores.join("<br>");
        errorContainer.classList.add("show");
    }

    // Función para mostrar un mensaje de error específico
    function mostrarMensajeError(mensaje) {
        errorContainer.innerHTML = mensaje;
        errorContainer.classList.add("show");
    }
});
