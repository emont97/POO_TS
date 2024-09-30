import { Cuenta } from './Cuenta';

// Selección de elementos del DOM
const nombreInput = document.getElementById("nombre") as HTMLInputElement;
const cantidadInput = document.getElementById("cantidad") as HTMLInputElement;
const tipoCuentaInput = document.getElementById("tipoCuenta") as HTMLInputElement;
const numeroCuentaInput = document.getElementById("numeroCuenta") as HTMLInputElement;
const resultadoDiv = document.getElementById("resultado") as HTMLElement;
const btnDepositar = document.getElementById("depositar") as HTMLButtonElement;
const btnRetirar = document.getElementById("retirar") as HTMLButtonElement;
const btnMostrarDatos = document.getElementById("mostrarDatos") as HTMLButtonElement;

// Crear una instancia de la cuenta
let miCuenta: Cuenta;

// Función para validar los campos del formulario
const validarFormulario = (): boolean => {
    if (!nombreInput.value.trim()) {
        alert("Por favor, ingresa un nombre.");
        return false;
    }

    if (!cantidadInput.value || parseFloat(cantidadInput.value) <= 0) {
        alert("Por favor, ingresa una cantidad inicial válida mayor que 0.");
        return false;
    }

    if (!tipoCuentaInput.value.trim()) {
        alert("Por favor, selecciona un tipo de cuenta.");
        return false;
    }

    if (!numeroCuentaInput.value.trim()) {
        alert("Por favor, ingresa un número de cuenta.");
        return false;
    }

    return true;
};

// Función para crear la cuenta
const crearCuenta = () => {
    const nombre = nombreInput.value;
    const cantidad = parseFloat(cantidadInput.value);
    const tipoCuenta = tipoCuentaInput.value;
    const numeroCuenta = numeroCuentaInput.value;

    miCuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
};

// Función para depositar
const realizarDeposito = () => {
    if (validarFormulario()) {
        crearCuenta();
        resultadoDiv.innerHTML = miCuenta.depositar();
    }
};

// Función para retirar
const realizarRetiro = () => {
    if (validarFormulario()) {
        const valorRetiro = parseFloat(prompt("¿Cuánto deseas retirar?") || "0");
        resultadoDiv.innerHTML = miCuenta.retirar(valorRetiro);
    }
};

// Función para mostrar los datos de la cuenta
const mostrarDatos = () => {
    if (validarFormulario()) {
        crearCuenta();
        resultadoDiv.innerHTML = miCuenta.mostrarDatosCuenta();
    }
};

// Eventos
btnDepositar.addEventListener("click", realizarDeposito);
btnRetirar.addEventListener("click", realizarRetiro);
btnMostrarDatos.addEventListener("click", mostrarDatos);
