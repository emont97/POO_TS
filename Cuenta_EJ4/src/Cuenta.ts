export class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    // Método para depositar dinero en la cuenta
    depositar(): string {
        if (this.cantidad < 5) {
            return "El valor a depositar debe ser mayor a $5.00.";
        } else {
            return `Se ha depositado correctamente $${this.cantidad.toFixed(2)}.`;
        }
    }

    // Método para retirar dinero de la cuenta
    retirar(valor: number): string {
        if (valor > this.cantidad) {
            return "No hay suficiente saldo en la cuenta.";
        } else if (valor < 5) {
            return "No se puede retirar menos de $5.00.";
        } else {
            this.cantidad -= valor;
            return `Has retirado $${valor.toFixed(2)}. Te queda $${this.cantidad.toFixed(2)} en la cuenta.`;
        }
    }

    // Método para mostrar los datos de la cuenta
    mostrarDatosCuenta(): string {
        return `
            Nombre: ${this.nombre}<br>
            Tipo de Cuenta: ${this.tipoCuenta}<br>
            Número de Cuenta: ${this.numeroCuenta}
        `;
    }
}
