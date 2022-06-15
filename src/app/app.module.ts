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
import { FlexExplanationComponent } from './flex-y-grid/flex-explanation/flex-explanation.component';
import { GridExplanationComponent } from './flex-y-grid/grid-explanation/grid-explanation.component';
import { SassComponent } from './sass/sass.component';
import { JavascriptComponent } from './javascript/javascript.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    ResponsiveComponent,
    SelectoresComponent,
    FlexYGridComponent,
    FlexComponent,
    GridComponent,
    FlexExplanationComponent,
    GridExplanationComponent,
    SassComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
