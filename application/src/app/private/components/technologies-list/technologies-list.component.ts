import { Component, OnInit } from '@angular/core';
import { TechnologiesState, technologiesStateSelector } from './state/technologies.state';
import { Store } from '@ngrx/store';
import { load } from './state/actions/technologies.actions';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.scss'],

})
export class TechnologiesListComponent implements OnInit {

  constructor(private store: Store<TechnologiesState>) { }

  ngOnInit() {
    this.store.dispatch(load());
  }
}
