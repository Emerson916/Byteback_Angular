import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  // destino: number;
  // valor: number;
  transferencia: any = {};

  transferirArquivo($event) {
    console.log($event);
    // this.destino = $event.destino;
    // this.valor = $event.valor;
    this.transferencia = $event;
  }
}
