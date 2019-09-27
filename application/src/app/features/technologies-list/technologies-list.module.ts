import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesListComponent } from './technologies-list.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { TotalsComponent } from './components/totals/totals.component';
import { EffectsModule } from '@ngrx/effects';
import { TechnologiesEffects } from './state/effects/technologies.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { technologiesReducer } from './state/reducers/technologies.reducer';



@NgModule({
  declarations: [
    TechnologiesListComponent,
    InputComponent,
    ListComponent,
    TotalsComponent,
  ],
  imports: [
    StoreModule.forFeature('technologies-list', technologiesReducer),
    CommonModule,
    EffectsModule.forFeature([TechnologiesEffects]),
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    CommonModule,
    FormsModule
  ],
})
export class TechnologiesListModule { }
