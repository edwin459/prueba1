import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../modelos/servicios/sesion.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private ruta: Router, private sesionService: SesionService) {}

  logOut(){
    this.sesionService.Cerrar();
  }
}
