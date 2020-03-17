import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IonRouterOutlet, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {Plugins} from '@capacitor/core';
import {RouterOutletService} from './RouterOutletService';

const {Storage} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet;

  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private router: Router,
      private statusBar: StatusBar,
      private routerOutletService: RouterOutletService) {
    this.initializeApp();
  }

  async getLogin() {
    const ret = await Storage.get({key: 'login'});
    return JSON.parse(ret.value);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
      this.getLogin().then(r => {
        try {
          if (r.un === '' || r.pw === '') {
            this.router.navigateByUrl('/login');
          }
        } catch {
          this.router.navigateByUrl('/login');
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.routerOutletService.init(this.routerOutlet);
  }
}
