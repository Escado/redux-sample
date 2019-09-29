import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TechnologyAppendState, technologiesAppendStateSelector } from '../../state/technologies.state';
import { append } from '../../state/actions/technologies.append.actions';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200)
      ]),
      transition(':leave',
        animate(200, style({ opacity: 0 })))
    ])
  ]
})
export class InputComponent implements OnInit {

  name: string;
  rating: number;

  state: TechnologyAppendState;

  constructor(private store: Store<TechnologyAppendState>) { }

  ngOnInit() {
    this.store.select(technologiesAppendStateSelector).subscribe(state => this.state = state);
  }

  onAdd() {
    this.store.dispatch(append({item: { name: this.name, rating: this.rating }}));
    this.name = '';
    this.rating = null;
  }
}
