import { Empleado } from './Empleado';

// Crear una instancia de Empleado
const empleado1 = new Empleado("Erick", "Montoya", "Altos del Bulevar", "2020-1234", 26);

// Cargar sueldo
empleado1.cargarSueldo(3000);

// Mostrar datos del empleado y su sueldo
const resultadoDiv = document.getElementById("resultado") as HTMLElement;
resultadoDiv.innerHTML = empleado1.mostrarDatos() + "<br>" + empleado1.imprimirSueldo();
