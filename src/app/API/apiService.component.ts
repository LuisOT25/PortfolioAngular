import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from './proyecto.model';
import { Certificado } from './certficado.model';

@Injectable({
  providedIn: "root"
})
export class ApiService {

  BACKEND_URL = 'http://localhost:3000'
  constructor(private http:HttpClient){}

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.BACKEND_URL+'/projects');
  }

  getCertificados(): Observable<Certificado[]>{
    return this.http.get<Certificado[]>(this.BACKEND_URL+'/certificados');
  }
}
