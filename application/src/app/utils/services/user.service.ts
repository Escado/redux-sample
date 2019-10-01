import { Injectable } from '@angular/core';
import { UtilsModule } from '../utils.module';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    login(username: string): Observable<boolean> {
        if (username.toLowerCase().startsWith('k')) {
            return throwError('Bad username');
        }
        return of(true);
    }
}
