import { Calculadora } from './Calculadora';

// Crear una instancia de la clase Calculadora
const calc = new Calculadora();

// Obtener los elementos del DOM
const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const resultadoElement = document.getElementById('resultado') as HTMLElement;

// Función para mostrar el resultado
function mostrarResultado(result: number | string): void {
  resultadoElement.textContent = result.toString();
}

// Escuchar los eventos de los botones
document.getElementById('sumarBtn')?.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const resultado = calc.sumar(num1, num2);
  mostrarResultado(resultado);
});

document.getElementById('restarBtn')?.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const resultado = calc.restar(num1, num2);
  mostrarResultado(resultado);
});

document.getElementById('multiplicarBtn')?.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const resultado = calc.multiplicar(num1, num2);
  mostrarResultado(resultado);
});

document.getElementById('dividirBtn')?.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  try {
    const resultado = calc.dividir(num1, num2);
    mostrarResultado(resultado);
  } catch (error) {
    mostrarResultado((error as Error).message);
  }
});

document.getElementById('potenciaBtn')?.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const resultado = calc.potencia(num1, num2);
  mostrarResultado(resultado);
});

document.getElementById('factorialBtn')?.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  try {
    const resultado = calc.factorial(num1);
    mostrarResultado(resultado);
  } catch (error) {
    mostrarResultado((error as Error).message);
  }
});
