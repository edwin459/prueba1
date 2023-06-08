import { Component, OnInit } from '@angular/core';
import { InfoService } from '../modelos/servicios/info.service';
import { Factura } from '../modelos/factura.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  Data: Factura[] = [];
  constructor(private infoService: InfoService, private alertController: AlertController, private router: Router) {}

  ngOnInit(){
    this.VerFacturas();
  }

  VerFacturas(){
    this.infoService.Optener_Factura().subscribe((data)=>{
      this.Data = data;
    })
  }

  async Eliminar(id: any){
    this.infoService.Eliminar_Factura(id).subscribe((data)=>{
      console.log('Eliminadoo!');
    })
    const alert = await this.alertController.create({
      header: 'Completado',
      message: 'Registro Eliminado con Éxito (Se requiere actualización de la página)',
      buttons: ['OK'],
    });
    
    await alert.present();
    return;
  }
}
