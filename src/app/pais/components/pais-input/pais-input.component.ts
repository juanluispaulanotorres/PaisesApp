import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})

export class PaisInputComponent implements OnInit  {

  @Input() placeholder: string = "";

  @Output() onEnter: EventEmitter<string> = new EventEmitter();           // El tipo de evento lo determinará la propiedad utilizada para almacenar el valor del input
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))                                              // pipe(): Me permite transformar la salida de suscribe()     debounceTime(): Tiempo de espera antes de emitir el siguiente valor
    .subscribe(valor => {
      this.onDebounce.emit(valor);
      console.log(valor);
    })
  }

  termino: string = "";

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);                                    // next(): Está suscrito en ngOnInit()
  }
}
