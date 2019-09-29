import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { transition, style, animate, trigger } from '@angular/animations';
import { TehcnologiesListState, technologiesListStateSelector, technologiesEntitiesSelector } from '../../state/technologies.state';
import { TechnologyApiModel } from '../../models/service.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ]),
    trigger('expandIn', [
      transition(':enter', [
        style({ lineHeight: 0, height: 0, opacity: 0 }),
        animate(300)
      ])
    ])
  ]
})
export class ListComponent implements OnInit {


  @ViewChild(MatTable, { static: false }) table: MatTable<TechnologyApiModel>;

  state: TehcnologiesListState;

  entities$: Observable<TechnologyApiModel[]>;

  constructor(private store: Store<TehcnologiesListState>) { }

  ngOnInit() {

    this.entities$ = this.store.select(technologiesEntitiesSelector);

    this.store.select(technologiesListStateSelector).subscribe(
      state => {
        this.state = state;
      }
    );
  }
}
