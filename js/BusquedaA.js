document.addEventListener('DOMContentLoaded', function() {
    const formularioBusquedaDiv = document.getElementById('formulario-busqueda');
    const inputBuscarMatricula = document.querySelector('input[name="Buscar_tutor"]');
    const botonBuscar = document.getElementById('boton-buscar');
    const infoTutorDiv = document.getElementById('info-tutor');
    const mensajeErrorDiv = document.getElementById('mensaje-error');
    const botonRegresar = document.getElementById('boton-regresar');
    const botonModificar = document.getElementById('boton-modificar');
    const botonCancelarBusqueda = document.getElementById('boton-cancelar-busqueda');

    const datosTutor = {
        "15210011": {
            nombre: "Diego",
            apellidoPaterno: "Gonzalez",
            apellidoMaterno: "Caballero",
            telefono: "5512345678",
            correo: "Diego.@ejemplo.com",
            unidadEstudios: "UMB Ecatepec"
        }
       
    };

    
    infoTutorDiv.style.display = 'none';
    mensajeErrorDiv.style.display = 'none';

    botonBuscar.addEventListener('click', function() {
        const matricula = inputBuscarMatricula.value;

      
        infoTutorDiv.style.display = 'none';
        mensajeErrorDiv.style.display = 'none';
        formularioBusquedaDiv.classList.remove('ocultar');

        setTimeout(() => {
            if (datosTutor.hasOwnProperty(matricula)) {
                const tutor = datosTutor[matricula];
                document.getElementById('nombre-tutor').textContent = tutor.nombre;
                document.getElementById('apellido-paterno-tutor').textContent = tutor.apellidoPaterno;
                document.getElementById('apellido-materno-tutor').textContent = tutor.apellidoMaterno;
                document.getElementById('telefono-tutor').textContent = tutor.telefono;
                document.getElementById('correo-tutor').textContent = tutor.correo;
                document.getElementById('unidad-estudios-tutor').textContent = tutor.unidadEstudios;
                infoTutorDiv.style.display = 'flex';
                infoTutorDiv.classList.add('mostrar');
                formularioBusquedaDiv.classList.add('ocultar');
            } else {
                mensajeErrorDiv.style.display = 'block';
                mensajeErrorDiv.classList.add('mostrar');
                formularioBusquedaDiv.classList.remove('ocultar');
            }
        }, 300);
    });

    botonRegresar.addEventListener('click', function() {
        infoTutorDiv.classList.remove('mostrar');
        infoTutorDiv.style.display = 'none';
        formularioBusquedaDiv.classList.remove('ocultar');
        mensajeErrorDiv.classList.remove('mostrar');
        mensajeErrorDiv.style.display = 'none';
        inputBuscarMatricula.value = '';
    });

    botonModificar.addEventListener('click', function() {
        window.location.href = 'ModificarTr.html';
    });

    inputBuscarMatricula.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 8) {
            this.value = this.value.slice(0, 8);
        }
    });

   
    if (botonCancelarBusqueda) {
        botonCancelarBusqueda.addEventListener('click', function() {
            window.location.href = 'MenuB.html';
        });
    }
});