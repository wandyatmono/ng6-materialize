import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FeaturesModule } from './features/features.module';

import { ScrollService } from './services/scroll.service';
import { UtilityService } from './services/utility.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeaturesModule
  ],
  providers: [
    ScrollService,
    UtilityService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
