import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserState, userUsernameSelector, userStateSelector } from 'src/app/utils/states/user/user.state';
import { Store } from '@ngrx/store';
import { login, logout } from 'src/app/utils/states/user/actions/user.actions';
import { Subject } from 'rxjs';
import { filter, tap, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  username: string;

  private ngUnsubscribe = new Subject();


  constructor(private store: Store<UserState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(logout());
    this.store.select(userUsernameSelector).pipe(
      filter(username => !!username),
      tap(_ => this.router.navigate(['']))
    ).subscribe();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onLogin() {
    this.store.dispatch(login({ username: this.username }));
  }

}
