import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/apiService.component';
import { Proyecto } from '../API/proyecto.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  proyectosList:Proyecto[]=[]
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.getProyectos().subscribe(lista=>{
      this.proyectosList = lista
    });
  }
}
