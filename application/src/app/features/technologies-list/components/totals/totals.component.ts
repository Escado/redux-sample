import { Component, OnInit } from '@angular/core';
import { TechnologiesState, technologiesEntitiesSelector, technologiesTotals } from '../../state/technologies.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnInit {

  total$: Observable<{ total: number, average: number }>;

  constructor(private store: Store<TechnologiesState>) { }

  ngOnInit() {
    this.total$ = this.store.select(technologiesTotals);
  }

}
