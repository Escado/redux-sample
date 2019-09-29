import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userStateName } from './user.state';
import { userStateReducer } from './reducers/user.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(userStateName, userStateReducer)
    ]
})
export class UserStateModule {

}
