export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si es mayor de edad
    esMayorDeEdad(): string {
        return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    }

    // Método abstracto para mostrar los datos personales
    abstract mostrarDatos(): string;
}
