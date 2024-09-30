export class PageHeader {
    private title: string;
    private color: string;
    private font: string;
    private alignment: 'center' | 'left' | 'right';

    constructor(title: string, color: string, font: string) {
        this.title = title;
        this.color = color;
        this.font = font;
        this.alignment = 'left'; // Por defecto
    }

    // Método para obtener el título, color y fuente
    public getTitleColorFont(): { title: string, color: string, font: string } {
        return {
            title: this.title,
            color: this.color,
            font: this.font
        };
    }

    // Método para definir la alineación del título (centrado, derecha, izquierda)
    public setAlignment(alignment: 'center' | 'left' | 'right'): void {
        this.alignment = alignment;
    }

    // Método para obtener las propiedades como HTML
    public getHTML(): string {
        return `
            <h1 style="color: ${this.color}; font-family: ${this.font}; text-align: ${this.alignment};">
                ${this.title}
            </h1>
        `;
    }
}
