import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { auto } from '@popperjs/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
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




  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      
      width:auto
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


