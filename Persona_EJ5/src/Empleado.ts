import { Persona } from './Persona';

export class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = 0; // Inicializamos sueldo a 0
    }

    // Método para cargar el sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): string {
        return `El sueldo es: $${this.sueldo.toFixed(2)}`;
    }

    // Implementación del método abstracto
    mostrarDatos(): string {
        return `
            Nombre: ${this.nombre} ${this.apellido}<br>
            Dirección: ${this.direccion}<br>
            Teléfono: ${this.telefono}<br>
            Edad: ${this.edad}<br>
            ${this.esMayorDeEdad()}
        `;
    }
}
