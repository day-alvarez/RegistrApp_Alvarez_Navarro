import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPageRoutingModule } from './curso-routing.module';
import { QRCodeModule } from 'angularx-qrcode'; // Asegúrate de que esta línea esté presente


import { CursoPage } from './curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPageRoutingModule,
    QRCodeModule // Asegúrate de que QRCodeModule esté aquí

  ],
  declarations: [CursoPage]
})
export class CursoPageModule {}
