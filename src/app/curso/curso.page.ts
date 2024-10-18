import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage {
  selectedSegment: string = 'miEspacio';
  currentDate: string = new Date().toISOString();
  clases: { id: number; dia: string; fecha: string; cantidad: number }[] = [];
  qrData: string | null = null;

  constructor() {
    this.clases = [
      { id: 1, dia: 'Lunes', fecha: '2024-10-20', cantidad: 30 },
      { id: 2, dia: 'Miércoles', fecha: '2024-10-22', cantidad: 25 },
    ];
  }

  segmentChanged(event: any) {
    console.log('Segment changed:', event.detail.value);
  }

  dateChanged(event: any) {
    console.log('Date changed:', event.detail.value);
    this.currentDate = event.detail.value;
  }

  verDetalles(clase: { id: number; dia: string; fecha: string; cantidad: number }) {
    console.log('Detalles de la clase:', clase);
  }

  generarQR(clase: { id: number; dia: string; fecha: string; cantidad: number }) {
    this.qrData = this.qrData ? null : `ID: ${clase.id}, Día: ${clase.dia}, Fecha: ${clase.fecha}, Cantidad: ${clase.cantidad}`;
    console.log('Generar QR para la clase:', this.qrData);
  }

  nuevaClase() {
    console.log('Agregar nueva clase');
  }
}
