import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Components/search/search.component';
import { HomeComponent } from './Pages/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { HeroComponent } from './Sections/hero/hero.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: HeroComponent },
      { path: '1a2b3c', component: CategoryComponent },
    ],
  },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
