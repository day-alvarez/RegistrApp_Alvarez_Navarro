import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage {

  constructor(private router: Router) { }

  ingresarCurso(curso: string) {
    if (curso === 'programacion') {
      this.router.navigate(['/curso-programacion']); 
    } else if (curso === 'web') {
      this.router.navigate(['/curso-web']); 
    }
  }
}
