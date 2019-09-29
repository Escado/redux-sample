import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PublicRoutingModule } from './public-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PublicRoutingModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatOptionModule,
        MatSelectModule,
        MatCardModule,
    ],
    declarations: [
        LoginComponent
    ],
})
export class PublicModule {

}
