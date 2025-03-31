// Función para bloquear números y caracteres especiales en campos de texto
function validarInput(event) {
    const tecla = event.key;
    const permitido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]$/;

    if (!permitido.test(tecla)) {
        event.preventDefault();
    }
}

function validarTelefono(event) {
    const inputTelefono = event.target;
    const tecla = event.key;

    // Permitir solo dígitos y teclas de control (borrar, tabulador, etc.)
    if (!/^[0-9]$/.test(tecla) && !['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(tecla)) {
        event.preventDefault();
    }

    // Limitar la longitud a 10 dígitos
    if (inputTelefono.value.length >= 10 && tecla !== 'Backspace' && tecla !== 'Delete') {
        event.preventDefault();
    }
}

function guardarCambios(event) {
    event.preventDefault(); // Evitar el envío del formulario
    alert("Los cambios han sido guardados exitosamente."); // Mostrar una ventana emergente
    window.location.href = "BusquedaA.html"; // Redirigir a BusquedaA.html
}

function redirigirBusqueda() {
    window.location.href = "BusquedaA.html"; // Redirigir a BusquedaA.html al hacer clic en Cancelar
}