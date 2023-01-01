import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponente } from './PrimeiroComponente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { RenderizarListaComponent } from './renderizar-lista/renderizar-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponente,
    SegundoComponenteComponent,
    RenderizarListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
