import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesListComponent } from './features/technologies-list/technologies-list.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';


const routes: Routes = [
  {
    path: '',
    component: TechnologiesListComponent
  },
  {
    path: 'nav',
    component: NavBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
