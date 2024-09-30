export class Calculadora {
    // Método para sumar dos números
    sumar(a: number, b: number): number {
      return a + b;
    }
  
    // Método para restar dos números
    restar(a: number, b: number): number {
      return a - b;
    }
  
    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
      return a * b;
    }
  
    // Método para dividir dos números
    dividir(a: number, b: number): number {
      if (b === 0) {
        throw new Error('No se puede dividir entre 0');
      }
      return a / b;
    }
  
    // Método para calcular la potencia (a^b)
    potencia(a: number, b: number): number {
      return Math.pow(a, b);
    }
  
    // Método para calcular el factorial de un número
    factorial(n: number): number {
      if (n < 0) {
        throw new Error('No se puede calcular el factorial de un número negativo');
      }
      if (n === 0 || n === 1) {
        return 1;
      }
      let resultado = 1;
      for (let i = 2; i <= n; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }
  