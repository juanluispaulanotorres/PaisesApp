import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px
      }
    `
  ]
})

export class PorRegionComponent  {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCss(region: string) {
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) {return;}       // Si el botón está activo, no se pueden volver a cargar los países al volver a pulsarlo

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region)
    .subscribe( (respuesta) => {
      this.paises = respuesta;
    })

  }

}
