import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class HomeModule { }
