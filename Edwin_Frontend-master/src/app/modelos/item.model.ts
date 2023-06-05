export class Item {
    id?: string;
    Producto: string;
    Cantidad: number;
    Total: number;

    constructor(Producto: string, Cantidad: number, Total: number){
        this.Producto = Producto;
        this.Cantidad = Cantidad;
        this.Total = Total;
    }
}