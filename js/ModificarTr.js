
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

    
    if (!/^[0-9]$/.test(tecla) && !['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(tecla)) {
        event.preventDefault();
    }

    
    if (inputTelefono.value.length >= 10 && tecla !== 'Backspace' && tecla !== 'Delete') {
        event.preventDefault();
    }
}

function guardarCambios(event) {
    event.preventDefault(); 
    alert("Los cambios han sido guardados exitosamente."); 
    window.location.href = "BusquedaA.html"; 
}

function redirigirBusqueda() {
    window.location.href = "BusquedaA.html"; 
}