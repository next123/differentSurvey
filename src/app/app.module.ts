import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LighStarComponent } from './ligh-star/ligh-star.component';
import { EmptyStarComponent } from './empty-star/empty-star.component';

@NgModule({
  declarations: [
    AppComponent,
    LighStarComponent,
    EmptyStarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
