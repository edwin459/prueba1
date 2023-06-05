export class Factura {
    id?: string;
    Producto: string;
    c_u: number;
    Cantidad: number;
    Total: number;
    Nit_Persona: string;
    Fecha: string;

    constructor(Producto: string, c_u: number, Cantidad: number, Total: number, Nit_Persona: string, Fecha: string){
        this.Producto = Producto;
        this.c_u = c_u;
        this.Cantidad = Cantidad;
        this.Total = Total;
        this.Nit_Persona = Nit_Persona;
        this.Fecha = Fecha;
    }
}