import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {Router} from '@angular/router';
const { Storage } = Plugins;

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
  username: string;
  password: string;
  constructor(private router: Router) { }

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


  ngOnInit() {
  }

  submitForm() {
    const endpoint = `https://pinnacle-scraper.herokuapp.com/api?un=${this.username}&pw=${this.password}`;
    fetchAsync(endpoint).then(data => {
      if (data === 'Username or Password was Incorrect') {
        console.log('Yo.');
      } else {
        this.setLogin(this.username, this.password).then(r => {
          this.router.navigate(['/home']);
        });
      }});
  }
}

