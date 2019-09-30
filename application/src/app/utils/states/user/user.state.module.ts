import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userStateName } from './user.state';
import { userStateReducer } from './reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(userStateName, userStateReducer),
        EffectsModule.forFeature([UserEffects])
    ]
})
export class UserStateModule {

}
