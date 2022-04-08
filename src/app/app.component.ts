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
  transferencias: any[] = [];

  transferirArquivo($event) {
    console.log($event);
    // this.destino = $event.destino;
    // this.valor = $event.valor;
    const transferenciaComData = {...$event, data: new Date()}
    this.transferencias.push(transferenciaComData);
  }
}
