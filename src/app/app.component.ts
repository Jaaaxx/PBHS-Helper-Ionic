import { Component } from '@angular/core';
const { Storage } = Plugins;
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {Plugins} from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router,
    private statusBar: StatusBar) {
    this.initializeApp();
  }

  async setLogin(uun, upw) {
    await Storage.set({
      key: 'login',
      value: JSON.stringify({
        un: uun,
        pw: upw
      })
    });
  }
  async getLogin() {
    const ret = await Storage.get({ key: 'login' });
    const user = JSON.parse(ret.value);
    console.log(user);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getLogin().then(data => {
        // @ts-ignore
        if (r.un && r.pw) {
          this.router.navigateByUrl('/home');
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    });
  }
}
