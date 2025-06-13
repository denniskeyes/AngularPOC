import { NgModule } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { HomeComponent } from './home/home.component';

import { FadeInOnScrollDirective } from './shared/directives/fade-in-on-scroll.directive';
import { HeaderScrollOpacityDirective } from './shared/directives/header-scroll-opacity.directive';
import { PokemonCardLayoutComponent } from './pokemon-card-layout/pokemon-card-layout.component';

import { TimeOfDayGreetingPipe } from './shared/pipes/time-of-day-greeting.pipe';
import { HealthcareTableComponent } from './healthcare-table/healthcare-table.component';
import { LayoutSandboxComponent } from './layout-sandbox/layout-sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FadeInOnScrollDirective,
    HeaderScrollOpacityDirective,
    HomeComponent,
    NavMenuComponent,
    PokemonCardLayoutComponent,
    TimeOfDayGreetingPipe,
    HealthcareTableComponent,
    LayoutSandboxComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
