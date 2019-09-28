import { Component, OnInit } from '@angular/core';
import { TechnologiesState, technologiesEntitiesSelector } from '../../state/technologies.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnInit {

  constructor(private store: Store<TechnologiesState>) { }

  ngOnInit() {
    this.store.select(technologiesEntitiesSelector);
  }

}
