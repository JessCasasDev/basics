import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexExplanationComponent } from './flex-y-grid/flex-explanation/flex-explanation.component';
import { FlexYGridComponent } from './flex-y-grid/flex-y-grid.component';
import { FlexComponent } from './flex-y-grid/flex/flex.component';
import { GridExplanationComponent } from './flex-y-grid/grid-explanation/grid-explanation.component';
import { GridComponent } from './flex-y-grid/grid/grid.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { SassComponent } from './sass/sass.component';
import { SelectoresComponent } from './selectores/selectores.component';
import { TypescriptComponent } from './typescript/typescript.component';

const routes: Routes = [
  { path: 'selectores', component: SelectoresComponent },
  { path: 'unidades-y-responsive', component: ResponsiveComponent },
  {
    path: 'flexbox-y-grid',
    component: FlexYGridComponent,
    children: [
      { path: 'flexbox-explanation', component: FlexExplanationComponent },
      { path: 'flexbox', component: FlexComponent },
      { path: 'grid-explanation', component: GridExplanationComponent },
      { path: 'grid', component: GridComponent },
    ],
  },
  {path: 'sass', component: SassComponent},
  {path: 'javascript', component: JavascriptComponent},
  {path: 'typescript', component: TypescriptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
