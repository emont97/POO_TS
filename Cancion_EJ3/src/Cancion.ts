export class Cancion {
    titulo: string;
    genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Se inicializa vacío por defecto
    }

    // Getter para el autor
    get getAutor(): string {
        return this.autor;
    }

    // Setter para el autor
    set setAutor(autor: string) {
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción en formato HTML
    mostrarCancion(): string {
        return `
            <strong>Título:</strong> ${this.titulo}<br>
            <strong>Género:</strong> ${this.genero}<br>
            <strong>Autor:</strong> ${this.autor}
        `;
    }

    // Método estático para crear una instancia desde el formulario
    static crearDesdeFormulario(titulo: string, genero: string, autor: string): Cancion {
        const cancion = new Cancion(titulo, genero);
        cancion.setAutor = autor;
        return cancion;
    }
}
