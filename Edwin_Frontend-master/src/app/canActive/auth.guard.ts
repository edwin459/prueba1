import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SesionService } from '../modelos/servicios/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private sesionService: SesionService, private router: Router){

  }

  canActivate(): boolean{
    if(this.sesionService.SesionActiva()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
