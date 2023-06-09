import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './certificates/certificates.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path:'LuisOcampo',
    component: PresentacionComponent
  },
  {
    path:'LuisOcampo/certificates',
    component: CertificatesComponent
  },
  {
    path:'LuisOcampo/projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
