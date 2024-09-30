import { Cancion } from './Cancion';

// Seleccionar elementos del DOM una vez
const form = document.getElementById("formCancion") as HTMLFormElement;
const resultadoDiv = document.getElementById("resultado") as HTMLElement;
const btnMostrarCancion = document.getElementById("mostrarCancion") as HTMLButtonElement;

// Función que maneja el evento del botón
const mostrarCancion = () => {
    // Validar formulario
    if (!form.checkValidity()) {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // Destructurar los valores del formulario
    const { titulo, genero, autor } = {
        titulo: (document.getElementById("titulo") as HTMLInputElement).value,
        genero: (document.getElementById("genero") as HTMLInputElement).value,
        autor: (document.getElementById("autor") as HTMLInputElement).value
    };

    // Crear instancia de Cancion usando el método estático
    const miCancion = Cancion.crearDesdeFormulario(titulo, genero, autor);

    // Mostrar los datos en el div resultado
    resultadoDiv.innerHTML = miCancion.mostrarCancion();
};

// Agregar el evento click al botón para mostrar la canción
btnMostrarCancion.addEventListener("click", mostrarCancion);
