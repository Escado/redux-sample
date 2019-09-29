import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { ServiceResponseModel, TechnologyApiModel } from '../models/service.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TechnologiesService {

    constructor(private http: HttpClient) {
    }

    getTechnologies(): Observable<TechnologyApiModel[]> {
        return this.http.get<ServiceResponseModel>('https://i3ovudx37a.execute-api.eu-north-1.amazonaws.com/default/app-personal').pipe(
            delay(500),
            map(x => x.technologies)
        );
    }

    appendTechnology(item: TechnologyApiModel): Observable<TechnologyApiModel> {
        if (item.name && item.name.indexOf('FAIL') !==  -1) {
            return throwError('You asked for this!').pipe(
                delay(1000)
            );
        }

        return of(item).pipe(
            delay(500)
        );
    }
}
