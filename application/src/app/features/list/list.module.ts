import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListInputComponent } from './components/list-input/list-input.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ListTotalComponent } from './components/list-total/list-total.component';
import { StoreModule } from '@ngrx/store';
import { ListReducer, listInitialState } from './state/reducers/list.reducer';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ListComponent,
        ListInputComponent,
        ListTableComponent,
        ListTotalComponent
    ],
    imports: [
        StoreModule.forFeature('list-state', ListReducer, { initialState: listInitialState }),
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        CommonModule,
        FormsModule
    ]
})
export class ListModule {

}
