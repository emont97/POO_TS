import { PageHeader } from './PageHeader';

class Main {
    private header: PageHeader;

    constructor() {
        // Inicializar el encabezado de la página con valores por defecto
        this.header = new PageHeader('Mi Página', 'green', 'Arial');

        // Modificar alineación del título
        this.header.setAlignment('center');

        // Renderizar el título en el DOM
        this.render();
    }

    // Método para renderizar el encabezado en el DOM
    private render(): void {
        const rootElement = document.getElementById('app');
        if (rootElement) {
            rootElement.innerHTML = this.header.getHTML();
        }
    }
}

// Inicializar la clase Main cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
    new Main();
});
