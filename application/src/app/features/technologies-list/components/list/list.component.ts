import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ListModel } from 'src/app/features/list/models/list.model';
import { TechnologiesState, technologiesEntitiesSelector, technologiesStateSelector } from '../../state/technologies.state';
import { Store } from '@ngrx/store';
import { TechnologyApiModel } from '../../models/service.model';
import { transition, style, animate, trigger } from '@angular/animations';

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
    ])
  ]
})
export class ListComponent implements OnInit {


  @ViewChild(MatTable, { static: false }) table: MatTable<ListModel>;

  state: TechnologiesState;

  constructor(private store: Store<TechnologiesState>) { }

  ngOnInit() {
    this.store.select(technologiesStateSelector).subscribe(
      state => {
        this.state = state;
      }
    );
  }
}
