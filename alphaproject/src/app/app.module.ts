import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticoliModule } from './modules/articoli/articoli.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './modules/errors/errors.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { LogoutModule } from './modules/logout/logout.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ArticoliModule,
    ErrorsModule,
    HomeModule,
    LoginModule,
    LogoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
