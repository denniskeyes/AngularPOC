import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { FadeInOnScrollDirective } from './shared/directives/fade-in-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FadeInOnScrollDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
