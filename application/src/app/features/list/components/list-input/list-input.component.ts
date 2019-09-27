import { Component, OnInit } from '@angular/core';
import { ListState } from '../../state/list.state';
import { Store } from '@ngrx/store';
import { append } from '../../state/actions/list.actions';

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.scss']
})
export class ListInputComponent implements OnInit {

  private i = 0;

  name: string;

  constructor(private store: Store<ListState>) { }

  ngOnInit() {
  }

  onAdd() {
    this.store.dispatch(append({item: { name: this.name, id: this.i++ }}));
    this.name = '';
  }

}
