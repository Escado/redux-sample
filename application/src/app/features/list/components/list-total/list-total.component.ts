import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListState, listEntitesSelector } from '../../state/list.state';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ListModel } from '../../models/list.model';

@Component({
  selector: 'app-list-total',
  templateUrl: './list-total.component.html',
  styleUrls: ['./list-total.component.scss']
})
export class ListTotalComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  entities: ListModel[];

  constructor(private store: Store<ListState>) { }

  ngOnInit() {
    this.store.select(listEntitesSelector).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe(entities => this.entities = entities)
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
