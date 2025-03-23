document.addEventListener("DOMContentLoaded", function () {
    let fechaInput = document.getElementById("fechaRegistro");
    let fechaActual = new Date().toISOString().split("T")[0];
    fechaInput.value = fechaActual;

    // Limitar la cantidad de caracteres en el campo de edad
    let edadInput = document.getElementById("edad");

    edadInput.addEventListener("input", function() {
        // Si el valor tiene más de 2 dígitos, recorta el valor
        if (edadInput.value.length > 2) {
            edadInput.value = edadInput.value.slice(0, 2);
        }
    });

    edadInput.addEventListener("keypress", function(event) {
        // Permite solo números
        if (!/[\d]/.test(event.key)) {
            event.preventDefault();
        }
    });

    // Restringir el campo de matrícula para que solo se ingresen números
    let matriculaInput = document.getElementById("matricula");

    matriculaInput.addEventListener("keypress", function(event) {
        // Permitir solo números (código ASCII para números 0-9)
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault(); // Si no es un número, prevenir la entrada
        }
    });

    document.getElementById("registroForm").addEventListener("submit", function (event) {
        let matricula = document.getElementById("matricula").value;
        let telefono = document.getElementById("telefono").value;
        let edad = document.getElementById("edad").value;
        let semestre = document.getElementById("semestre").value;
        let carrera = document.getElementById("carrera").value;

        let errores = [];

        // Validar Matrícula (exactamente 8 dígitos numéricos)
        if (!/^\d{8}$/.test(matricula)) {
            errores.push("La matrícula debe contener exactamente 8 dígitos numéricos.");
        }

        // Validar Teléfono (exactamente 10 dígitos)
        if (!/^\d{10}$/.test(telefono)) {
            errores.push("El teléfono debe contener exactamente 10 dígitos numéricos.");
        }

        // Validar Edad (entre 18 y 35 años, solo números)
        if (!/^\d+$/.test(edad) || edad < 18 || edad > 35) {
            errores.push("La edad debe estar entre 18 y 35 años.");
        }

        // Validar que el semestre sea seleccionado
        if (semestre === "") {
            errores.push("Debes seleccionar un semestre.");
        }

        // Validar que se seleccione una carrera
        if (carrera === "") {
            errores.push("Debes seleccionar una carrera.");
        }

        // Si hay errores, mostramos los mensajes en el contenedor y evitamos el envío
        if (errores.length > 0) {
            let errorContainer = document.getElementById("errorMessages");
            errorContainer.innerHTML = ""; // Limpiar cualquier mensaje de error previo
            errores.forEach(function(error) {
                let errorElement = document.createElement("p");
                errorElement.classList.add("error-message");
                errorElement.textContent = error;
                errorContainer.appendChild(errorElement);
            });
            event.preventDefault();
            errorContainer.classList.add("show"); // Mostrar los errores
        }
    });
});
