import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  correo: string = ''; 
  password: string = '';
  correoIngresado: boolean = false;
  userType: string = ''; 

  constructor(private router: Router) {}

 
  checkCorreo() {
    if (this.correo && this.correo.includes('@')) {
      this.correoIngresado = true;
    } else {
      this.correoIngresado = false;
    }
  }


  login() {
 
    if (this.correo === 'profesor@correo.com' && this.password === 'password') {
      this.userType = 'profesor';
    } else if (this.correo === 'alumno@correo.com' && this.password === 'password') {
      this.userType = 'alumno';
    } else {
     
      console.log('Correo o contraseña incorrectos');
      return;
    }

    if (this.userType === 'profesor') {
      this.router.navigate(['/cursos']); 
    } else if (this.userType === 'alumno') {
      this.router.navigate(['/alumno']); 
    }
  }
}
