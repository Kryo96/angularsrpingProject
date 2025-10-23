import { Component, OnInit } from '@angular/core';

import { ArticoliService } from 'src/app/core/services/articoli.service';
import { IArticoli } from 'src/app/shared/models/Articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

ngOnInit(): void {
  this.articoli = this.articoliService.getArticoli();
}

constructor(private articoliService: ArticoliService) { }

articoli: IArticoli[]  = [];

}
