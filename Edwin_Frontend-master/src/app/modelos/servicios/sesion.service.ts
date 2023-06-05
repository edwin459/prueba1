import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@capacitor-community/http';
import { HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(private router: Router) { }

  Loguearse = async (email: string, password: string) =>{
    const option = {
      url: 'http://localhost:3700/users/login',
      headers: { accept: 'application/json', 'Content-type': 'application/json' },
      data: { email: email , password: password }
    };

    const response: HttpResponse = await Http.post(option);
    return response;
  }

  //---------------------------------------

  SesionActiva(): Boolean{
    return !!localStorage.getItem('CapacitorStorage.token')
  }

  getToken(){
    return localStorage.getItem('CapacitorStorage.token')
  }

  Cerrar(){
    localStorage.removeItem('CapacitorStorage.token');
    this.router.navigate(['/']);
  }
}
