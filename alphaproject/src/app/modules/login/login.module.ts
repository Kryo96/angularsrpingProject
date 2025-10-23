import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
  ]
})
export class LoginModule { }
