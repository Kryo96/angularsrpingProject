import { ArticoliComponent } from './pages/articoli/articoli.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';

@NgModule({
  declarations: [
    ArticoliComponent,
    GridArticoliComponent,
    ArticoliCardComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class ArticoliModule { }
