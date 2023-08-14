import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = [
    'southern asia',
    'southern europe',
    'western asia',
    'polynesia',
    'northern america',
    'south america',
    'caribbean',
    'central america',
    'western europe',
    'australia and new zealand',
    'eastern europe',
    'northern europe',
    'melanesia',
    'micronesia',
    'eastern africa',
    'middle africa',
    'northern africa',
    'western africa',
    'central asia',
    'eastern asia',
    'southern africa',
    'south-eastern asia',
    'north america',
  ];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClassCss(region: string): string {
    return region === this.regionActiva
      ? 'btn:hover btn btn-primary'
      : 'btn btn-outlined-primary';
  }

  activaRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  }
}
