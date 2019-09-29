import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesListComponent } from './technologies-list.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { TotalsComponent } from './components/totals/totals.component';
import { EffectsModule } from '@ngrx/effects';
import { TechnologiesListEffects } from './state/effects/technologies.list.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { technologiesReducer } from './state/reducers/technologies.reducer';
import { TechnologiesAppendEffects } from './state/effects/technologies.append.effects';
import { TechnologiesStateName } from './state/technologies.state';
import { MatCardModule, MatCardSubtitle } from '@angular/material/card';



@NgModule({
  declarations: [
    TechnologiesListComponent,
    InputComponent,
    ListComponent,
    TotalsComponent,
  ],
  imports: [
    StoreModule.forFeature(TechnologiesStateName, technologiesReducer),
    EffectsModule.forFeature([TechnologiesListEffects, TechnologiesAppendEffects]),
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    CommonModule,
    FormsModule
  ],
})
export class TechnologiesListModule { }
