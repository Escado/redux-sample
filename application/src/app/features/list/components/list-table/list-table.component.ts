import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, AfterViewInit, ContentChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListState, listEntitesSelector, selectListState } from '../../state/list.state';
import { ListModel } from '../../models/list.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
})
export class ListTableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatTable, { static: false }) table: MatTable<ListModel>;

  entities: ListModel[] = [];

  private ngUnsubscribe = new Subject();

  constructor(private store: Store<ListState>) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngAfterViewInit() {
    this.store.select(listEntitesSelector).pipe(
      ).subscribe(state => {
        this.entities = state;
        console.log(this);
        this.table.renderRows();
        console.log(this.table);
      });
  }
}
