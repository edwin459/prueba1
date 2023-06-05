import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../modelos/servicios/sesion.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss'],
})
export class SesionComponent  implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private ruta: Router, private sesionService: SesionService) { }

  ngOnInit() {}

  async logIn(){
    this.sesionService.Loguearse(this.email, this.password).then(async (data)=>{
      console.log(data.data.token);
        await Preferences.set({
          key: 'token',
          value: data.data.token
        })
        this.ruta.navigate(['/tabs']);
    })
  }

}
