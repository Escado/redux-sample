import { Component, OnInit } from '@angular/core';
import { TechnologiesState, technologiesEntitiesSelector, technologiesTotals } from '../../state/technologies.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* -> *', [
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class TotalsComponent implements OnInit {

  total$: Observable<{ total: number, average: number }>;

  total: number;
  average: number;

  constructor(private store: Store<TechnologiesState>) { }

  ngOnInit() {
    this.total$ = this.store.select(technologiesTotals);
    this.store.select(technologiesTotals).subscribe(x => {
      this.total = x.total;
      this.average = x.average;
    });
  }

}
