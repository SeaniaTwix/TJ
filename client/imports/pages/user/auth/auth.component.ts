import { TokenHelper } from 'imports/util/token/token-helper'
import { Component } from '@angular/core';
import { AuthHelper } from 'imports/util/auth/auth-helper';
import { LocalDatabase } from 'imports/util/db/localdb-helper';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {
  id: string;
  password: string;
  nick: string;

  helper = new AuthHelper();
  db = new LocalDatabase('user');

  page: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.page = route.snapshot.paramMap.get('page');
  }

  login() {
    let err: Meteor.Error;
    this.helper.login(this.id, this.password).then((res) => {
      this.db.set('latest-signed', {
        token: res
      });

      console.log('success');
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.error(error);
    });
  }

  register() {
    let user = this.helper.register(this.id, this.password, this.nick);

    if (user) {
      console.log('success:', user);
      this.router.navigateByUrl('/auth/login');
    }
  }
}