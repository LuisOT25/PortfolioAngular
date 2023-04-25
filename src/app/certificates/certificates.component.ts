import { Component, OnInit } from "@angular/core";
import { ApiService } from "../API/apiService.component";
import { Certificado } from "../API/certficado.model";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificadosList:Certificado[]=[]
  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    this.apiService.getCertificados().subscribe(lista=>{
      this.certificadosList = lista
    })
  }
}


