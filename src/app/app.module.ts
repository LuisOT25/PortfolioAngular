import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificatesComponent } from './certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    ProjectsComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
