import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Felipe";
  dataNascimento = "01-01-1993";
  urlImage= "https://pbs.twimg.com/media/FgROeFKWAAEQeB1?format=jpg&name=large" 

  mostrarDataTitulo() {
    alert("29/10/2022")
  }
}
