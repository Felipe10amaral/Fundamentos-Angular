import { Component } from '@angular/core';
import { Celular } from '../type/Celular';

@Component({
  selector: 'app-renderizar-lista',
  templateUrl: './renderizar-lista.component.html',
  styleUrls: ['./renderizar-lista.component.css']
})
export class RenderizarListaComponent {
    celulares: Celular[] = [
      {id: 123, model: "iPhone X", descricao: "iphone x de 2018"},
      {id: 124, model: "iPhone XR", descricao: "iphone xr de 2019"},
      {id: 125, model: "iPhone 11", descricao: "iphone mais novo 2020"},
    ]

    
}
