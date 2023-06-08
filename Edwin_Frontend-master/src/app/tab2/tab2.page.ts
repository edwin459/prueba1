import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertInput } from '@ionic/angular';
import { InfoService } from '../modelos/servicios/info.service';
import { Item } from '../modelos/item.model';
import { Factura } from '../modelos/factura.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public items: number = 0;
  public num: number = 0;
  Producto: any = [];
  Dato = {
    Producto: '',
    Cantidad: 0,
    Total: 0,
    Nit_Persona: ''
  }
  Facturas = {
    Producto: '',
    c_u: 0,
    Cantidad: 0,
    Total: 0,
    Nit_Persona: '',
    Fecha: ''
  }
  public fechaActual = new Date();
  public fechaFormateada =this.fechaActual.toLocaleDateString('es-ES');

  constructor(private alert: AlertController, private infoService: InfoService, private alertController: AlertController, private router: Router) {}

  ngOnInit(){
    this.toProducto();
  }

  toProducto(){
    this.infoService.Optener_Producto().subscribe(async (dato)=>{
      for(var i=0; i<dato.length; i++){
        this.Producto[i] = dato[i].Tipo_Categoria+' '+dato[i].Color+' Talla:'+dato[i].Talla+' '+dato[i].DescripcionGeneral;
      }
      console.log(this.Producto);
    })
  }

  toInsert(){
    this.infoService.Optener_Producto().subscribe((dato)=>{
      for(var x=0; x<dato.length; x++){
        if(this.Dato.Producto == dato[x].Tipo_Categoria+' '+dato[x].Color+' Talla:'+dato[x].Talla+' '+dato[x].DescripcionGeneral){
          this.Dato.Total = this.Dato.Cantidad * dato[x].Precio;
          console.log(this.Dato);
          this.infoService.Agregar_Item(this.Dato).subscribe((data)=>{
            console.log(data);
            this.Facturas.Producto = this.Dato.Producto;
            this.Facturas.c_u = (this.Dato.Total/this.Dato.Cantidad);
            this.Facturas.Cantidad = this.Dato.Cantidad;
            this.Facturas.Total = this.Dato.Total;
            this.Facturas.Nit_Persona = this.Dato.Nit_Persona;
            this.Facturas.Fecha = this.fechaFormateada;   
            console.log(this.Facturas);
            this.infoService.Agregar_Factura(this.Facturas).subscribe(async (date)=>{
              console.log('Enviado!');
              const alert = await this.alertController.create({
                header: 'Completado',
                message: 'Registro Hecho con Éxito (Se requiere actualización de la página)',
                buttons: ['OK'],
              });
              
              await alert.present();
              this.router.navigate(['tabs/tab3']);
              return;
            })
          })
        }
      }
    })
  }
}