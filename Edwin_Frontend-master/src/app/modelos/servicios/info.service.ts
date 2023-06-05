import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../producto.model';
import { Item } from '../item.model';
import { Factura } from '../factura.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private URI = 'http://localhost:3700'; 

  constructor(private http: HttpClient) { }

  
  Optener_Producto(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any[]>(this.URI+'/productos');
  }

  Agregar_Producto(producto: Producto): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URI+'/productos', producto);
  }
  
  Optener_Item(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any[]>(this.URI+'/items');
  }

  Agregar_Item(item: any): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URI+'/items', item);
  }
    
  Optener_Factura(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any[]>(this.URI+'/facturas');
  }

  Agregar_Factura(factura: any): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URI+'/facturas', factura);
  }

  Eliminar_Factura(id: any): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(this.URI+'/facturas/'+id);
  }
}
