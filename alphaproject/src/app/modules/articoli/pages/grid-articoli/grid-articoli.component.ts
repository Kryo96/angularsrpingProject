import { Component, OnInit } from '@angular/core';

import { ArticoliService } from 'src/app/core/services/articoli.service';
import { IArticoli } from 'src/app/shared/models/Articoli';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent  implements OnInit  {

  articoli$ : IArticoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$);
  }

}
