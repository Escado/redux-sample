import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesListComponent } from './technologies-list.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { TotalsComponent } from './components/totals/totals.component';
import { EffectsModule } from '@ngrx/effects';
import { TechnologiesEffects } from './state/effects/technologies.effects';



@NgModule({
  declarations: [
    TechnologiesListComponent,
    InputComponent,
    ListComponent,
    TotalsComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([TechnologiesEffects])
  ],
})
export class TechnologiesListModule { }
