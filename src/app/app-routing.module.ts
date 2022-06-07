import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexYGridComponent } from './flex-y-grid/flex-y-grid.component';
import { FlexComponent } from './flex-y-grid/flex/flex.component';
import { GridComponent } from './flex-y-grid/grid/grid.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { SelectoresComponent } from './selectores/selectores.component';

const routes: Routes = [
  { path: 'selectores', component: SelectoresComponent },
  { path: 'unidades-y-responsive', component: ResponsiveComponent },
  {
    path: 'flexbox-y-grid',
    component: FlexYGridComponent,
    children: [
      { path: 'flexbox', component: FlexComponent },
      { path: 'grid', component: GridComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
