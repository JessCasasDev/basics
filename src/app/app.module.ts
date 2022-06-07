import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { SelectoresComponent } from './selectores/selectores.component';
import { FlexYGridComponent } from './flex-y-grid/flex-y-grid.component';
import { FlexComponent } from './flex-y-grid/flex/flex.component';
import { GridComponent } from './flex-y-grid/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    ResponsiveComponent,
    SelectoresComponent,
    FlexYGridComponent,
    FlexComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
