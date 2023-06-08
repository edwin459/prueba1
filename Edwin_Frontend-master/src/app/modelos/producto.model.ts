export class Producto {
    id?: string;
    Tipo_Categoria: string;
    Color: string;
    Talla: string;
    DescripcionGeneral: string;
    Precio: number;

    constructor(Tipo_Categoria: string, Color: string, Talla: string, DescripcionGeneral: string, Precio: number){
        this.Tipo_Categoria = Tipo_Categoria;
        this.Color = Color;
        this.Talla = Talla;
        this.DescripcionGeneral = DescripcionGeneral;
        this.Precio = Precio;
    }
}