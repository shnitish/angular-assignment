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
import { DrawerComponent } from './Components/drawer/drawer.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './Components/search/search.component';
import { HomeComponent } from './Pages/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { SearchCardComponent } from './Components/search-card/search-card.component';

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
    DrawerComponent,
    SearchComponent,
    HomeComponent,
    CategoryComponent,
    SearchCardComponent,
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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
