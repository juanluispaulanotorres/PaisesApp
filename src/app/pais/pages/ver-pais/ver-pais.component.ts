import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})

export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }           // ActivatedRoute: Contiene todo lo necesario para poder suscribirnos a cualquier cambio de la url

  ngOnInit(): void {
    // this.activatedRoute.params
    // .subscribe( ({id}) => {                                         // Utilizo la desestructuración para acceder directamente al "id" => ({id})
    //   console.log(id);
    //   this.paisService.getPaisPorCodigo(id)
    //   .subscribe(pais => {
    //     console.log(pais);
    //   });
    // });

    // Manera alternativa con RxJs (evitar escribir muchos "suscribe()")
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) =>                                              // switchMap(): Recibe un Observable y devuelve otro
        this.paisService.getPaisPorCodigo(id)
      ),
      tap(console.log)                                                  // tap(): Recibe una respuesta para poder trabajar con ella
    )
    .subscribe( pais => {
      this.pais = pais;
    })
  }

}
