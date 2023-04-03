import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


export interface DialogData {
  ruta: number;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  ruta!: number;

  constructor(public dialog: MatDialog) {}

  pdfSources:string[] =[
    'assets/Certificados/JAVA.pdf',
    'assets/Certificados/goIT.pdf',
    'assets/Certificados/01.pdf',
    'assets/Certificados/administraRedes.pdf',
    'assets/Certificados/diseñaRedes.pdf',
    'assets/Certificados/ensambla.pdf',
    'assets/Certificados/LANIA.pdf',
    'assets/Certificados/mantenimiento.pdf',
    'assets/Certificados/soportePresencial.pdf',
  ];

  openDialog(){
    let dialogRef = this.dialog.open(DialogBoxComponent,{
      data:{
        ruta: this.pdfSources[this.ruta]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


