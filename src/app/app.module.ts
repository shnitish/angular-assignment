import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Sections/navbar/navbar.component';
import { FooterComponent } from './Sections/footer/footer.component';
import { HeroComponent } from './Sections/hero/hero.component';
import { CardComponent } from './Components/card/card.component';
import { ClaimsComponent } from './Sections/claims/claims.component';
import { ContactComponent } from './Sections/contact/contact.component';
import { MenuComponent } from './Sections/menu/menu.component';
import { CityComponent } from './Sections/city/city.component';
import { AddButtonComponent } from './Components/add-button/add-button.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    CardComponent,
    ClaimsComponent,
    ContactComponent,
    MenuComponent,
    CityComponent,
    AddButtonComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
