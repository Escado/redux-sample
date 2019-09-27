import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesListComponent } from './features/technologies-list/technologies-list.component';


const routes: Routes = [
  {
    path: '',
    component: TechnologiesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
