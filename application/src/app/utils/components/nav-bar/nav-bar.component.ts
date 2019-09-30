import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserState, userUsernameSelector } from '../../states/user/user.state';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  username: string;

  private ngUnsubscribe = new Subject();

  constructor(private store: Store<UserState>, private router: Router) { }

  onLogout() {
    this.router.navigate(['public']);
  }

  ngOnInit() {
    this.store.select(userUsernameSelector).pipe(
      takeUntil(this.ngUnsubscribe),
    ).subscribe(username => {
      this.username = username;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
