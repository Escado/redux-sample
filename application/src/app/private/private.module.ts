import { NgModule } from '@angular/core';
import { TechnologiesListModule } from './components/technologies-list/technologies-list.module';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
    declarations: [
    ],
    providers: [
    ],
    imports: [
        TechnologiesListModule,
        PrivateRoutingModule
    ]
})
export class PrivateModule {

}
