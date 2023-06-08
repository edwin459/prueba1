import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoService } from '../modelos/servicios/info.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Producto_Formulario: FormGroup;

  constructor(private fb: FormBuilder, private infoService: InfoService, private alertController: AlertController) {
    this.Producto_Formulario = this.fb.group({
      'Tipo_Categoria': new FormControl("", Validators.required),
      'Color': new FormControl("", Validators.required),
      'Talla': new FormControl("", Validators.required),      
      'DescripcionGeneral': new FormControl("", Validators.required),      
      'Precio': new FormControl("", Validators.required)
    })
  }

  async Agendar(){
    var DATOS = this.Producto_Formulario.value;

    this.infoService.Agregar_Producto(DATOS).subscribe((datos)=>{
      console.log(datos);
    })

    const alert = await this.alertController.create({
      header: 'CONGRATULATION',
      message: 'Los datos han sido subidos correctamente',
      buttons: ['OK'],
    });
    
    await alert.present();
    return;
  }
}
