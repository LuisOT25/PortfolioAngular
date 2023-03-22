import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';

const routes: Routes = [
  {
    path:'',
    component: PresentacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
