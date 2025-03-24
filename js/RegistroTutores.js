// Función para validar que el campo 'Número de Empleado' solo permita números
function validarNumeroEmpleado() {
    const numeroEmpleado = document.getElementById('numeroEmpleado');
    
    // Eliminar cualquier carácter que no sea un número
    numeroEmpleado.value = numeroEmpleado.value.replace(/[^0-9]/g, ''); // Reemplaza todo lo que no sea número

    // Limitar la longitud a exactamente 8 caracteres
    if (numeroEmpleado.value.length > 8) {
        numeroEmpleado.value = numeroEmpleado.value.slice(0, 8); // Limita a 8 caracteres
    }
}

// Función para validar que el campo 'Número Telefónico' solo permita números
function validarNumeroTelefonico() {
    const numeroTelefonico = document.getElementById('numTelefonico');
    
    // Eliminar cualquier carácter que no sea un número
    numeroTelefonico.value = numeroTelefonico.value.replace(/[^0-9]/g, ''); // Reemplaza todo lo que no sea número

    // Limitar la longitud a exactamente 10 caracteres
    if (numeroTelefonico.value.length > 10) {
        numeroTelefonico.value = numeroTelefonico.value.slice(0, 10); // Limita a 10 caracteres
    }
}

// Función para validar el formulario antes de enviarlo
function validarFormulario() {
    let isValid = true;

    // Validar 'Número de Empleado'
    const numeroEmpleado = document.getElementById('numeroEmpleado');
    if (!numeroEmpleado.value.match(/^\d{8}$/)) {
        numeroEmpleado.classList.add('error');
        isValid = false;
    } else {
        numeroEmpleado.classList.remove('error');
    }

    // Validar 'Número Telefónico'
    const numeroTelefonico = document.getElementById('numTelefonico');
    if (!numeroTelefonico.value.match(/^\d{10}$/)) {
        numeroTelefonico.classList.add('error');
        isValid = false;
    } else {
        numeroTelefonico.classList.remove('error');
    }

    return isValid; // Retorna false si hay errores
}
