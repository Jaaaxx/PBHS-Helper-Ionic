import {Component, OnInit} from '@angular/core';
import {LoadingController, Platform} from '@ionic/angular';
import {Plugins} from '@capacitor/core';
import {Router} from '@angular/router';

const {Storage} = Plugins;

async function fetchAsync(url) {
    const response = await fetch(url);
    return await response.text();
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private router: Router, public loadingController: LoadingController, private platform: Platform) {
  }

  username: string;
  password: string;

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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Logging In...',
    });
    await loading.present();
  }

  ngOnInit() {
  }

  submitForm() {
    const endpoint = `https://pinnacle-scraper.herokuapp.com/verify?un=${this.username}&pw=${this.password}`;
    this.presentLoading();
    fetchAsync(endpoint).then(data => {
      this.loadingController.dismiss();
      if (data === 'True') {
        this.setLogin(this.username, this.password).then(r => this.router.navigateByUrl('/home'));
      }
    });
  }
}