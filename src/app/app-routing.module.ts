import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HealthcareTableComponent } from './healthcare-table/healthcare-table.component';
import { PokemonCardLayoutComponent } from './pokemon-card-layout/pokemon-card-layout.component';
import { LayoutSandboxComponent } from './layout-sandbox/layout-sandbox.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'layout-sandbox',
    component: LayoutSandboxComponent
  },
  {
    path: 'healthcare-selector-poc',
    component: HealthcareTableComponent
  },
  {
    path: 'pokedex',
    component: PokemonCardLayoutComponent
  },
  {
    // Fallback/default route
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    // Redirect if user enters route that isn't defined here
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
