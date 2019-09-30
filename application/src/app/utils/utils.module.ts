import { NgModule } from '@angular/core';
import { StatesModule } from './states/states.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        CommonModule,
        StatesModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatOptionModule,
        MatSelectModule,
        MatCardModule,
    ],
    exports: [
        NavBarComponent
    ],
    providers: [

    ]
})
export class UtilsModule {

}
