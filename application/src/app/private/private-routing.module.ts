import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesListComponent } from './components/technologies-list/technologies-list.component';
import { AuthGuardService } from '../utils/route/auth-guard.service';

const routes: Routes = [
    {
      path: '',
      component: TechnologiesListComponent,
      canActivate: [AuthGuardService]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class PrivateRoutingModule {

}
