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
        return of(
            [
                { name: 'C#', rating: 5 },
                { name: 'Python', rating: 5 },
                { name: 'SQL', rating: 3 },
                { name: 'Java', rating: 2 },
                { name: 'Angular', rating: 4 },
                { name: 'MVC', rating: 4 }
            ]
        ).pipe(delay(1000));
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
