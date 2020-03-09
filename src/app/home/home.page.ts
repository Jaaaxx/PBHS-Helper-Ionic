import { Component } from '@angular/core';
const { Storage } = Plugins;
import {Router} from '@angular/router';
import {Plugins} from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private router: Router) {}
  async setLogin(uun, upw) {
    await Storage.set({
      key: 'login',
      value: JSON.stringify({
        un: uun,
        pw: upw
      })
    });
  }

  signOut() {
    this.setLogin('', '').then(r => this.router.navigateByUrl('/login'));
  }

}
