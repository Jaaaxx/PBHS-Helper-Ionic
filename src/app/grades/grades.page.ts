import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {Plugins} from '@capacitor/core';
import {NavigationExtras, Router} from '@angular/router';

const {Storage} = Plugins;

async function fetchAsync(url) {
  const response = await fetch(url);
  return await response.text();
}

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
})

export class GradesPage implements OnInit {

  constructor(private router: Router, public loadingController: LoadingController,
              public navCtrl: NavController) {
  }

  doRefresh(event) {
    const rows = document.getElementById('rows');
    const rowChildren = rows.children as HTMLCollectionOf<HTMLElement>;
    // @ts-ignore
    for (const child of rowChildren) {
      for (const innerChild of child.children) {
        innerChild.disabled = true;
      }
    }
    rows.classList.add('blur');
    this.getLogin().then(r => {
      const endpoint = `https://pinnacle-scraper.herokuapp.com/api?un=${r.un}&pw=${r.pw}`;
      fetchAsync(endpoint).then(data => {
        rows.classList.remove('blur');
        event.target.complete();
        rows.textContent = '';
        const jData = JSON.parse(data);
        for (const i of jData) {
          if (i.Grade === '') {
            this.addGrade(i.Course, '', JSON.stringify(i.Assignments));
          } else {
            this.addGrade(i.Course, i.Grade + '%', JSON.stringify(i.Assignments));
          }
        }
      });
    });
  }

  async getLogin() {
    const ret = await Storage.get({key: 'login'});
    return JSON.parse(ret.value);
  }

  async presentLoading() {
    const loading = await this.loadingController.create();
    await loading.present();
  }

  selectColor(grade) {
    const g100 = '#5FB45F';
    const g98 = '#74D674';
    const g96 = '#89EE89';
    const g94 = '#A4F5A4';
    const g92 = '#C1FFC1';
    const g90 = '#D1FAD1';

    const g88 = '#FFFFCE';
    const g86 = '#F8F890';
    const g84 = '#F8F86A';
    const g82 = '#FDFD46';
    const g80 = '#FDFD03';

    const g78 = '#FCC273';
    const g76 = '#FDB34E';
    const g74 = '#DD932E';
    const g72 = '#BB7516';
    const g70 = '#9E5D04';
    const g00 = '#a52a2a';
    if (grade >= 100) {
      return g100;
    }
    if (grade >= 100) {
      return g100;
    }
    if (grade >= 98) {
      return g98;
    }
    if (grade >= 96) {
      return g96;
    }
    if (grade >= 94) {
      return g94;
    }
    if (grade >= 92) {
      return g92;
    }
    if (grade >= 90) {
      return g90;
    }
    if (grade >= 88) {
      return g88;
    }
    if (grade >= 86) {
      return g86;
    }
    if (grade >= 84) {
      return g84;
    }
    if (grade >= 82) {
      return g82;
    }
    if (grade >= 80) {
      return g80;
    }
    if (grade >= 78) {
      return g78;
    }
    if (grade >= 76) {
      return g76;
    }
    if (grade >= 74) {
      return g74;
    }
    if (grade >= 72) {
      return g72;
    }
    if (grade >= 70) {
      return g70;
    }
    if (grade < 70) {
      return g00;
    }
  }

  addGrade(name, grade, assignments) {
    const rows = document.getElementById('rows');
    const nameContainer = document.createElement('li');
    const n1 = document.createElement('h2');
    n1.textContent = name;
    nameContainer.append(n1);
    const gradeContainer = document.createElement('li');
    const g1 = document.createElement('button');
    g1.textContent = grade;
    const gNumber = parseInt(grade.replace('%', ''), 10);
    g1.style.backgroundColor = this.selectColor(gNumber);
    g1.onclick = () => {
      const navigationExtras: NavigationExtras = {
        state: {
          jsonData: assignments,
          title: name
        }
      };
      this.router.navigate(['/assignments'], navigationExtras);
    };
    gradeContainer.append(g1);
    rows.append(nameContainer);
    rows.append(gradeContainer);
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

  signOut() {
    this.setLogin('', '').then(r => this.router.navigateByUrl('/login'));
  }

  ngOnInit() {
    this.getLogin().then(r => document.getElementById('currentUserGR').innerHTML = `Sign Out: <b>${r.un}</b>`);
    this.presentLoading();
    this.getLogin().then(r => {
      const endpoint = `https://pinnacle-scraper.herokuapp.com/api?un=${r.un}&pw=${r.pw}`;
      fetchAsync(endpoint).then(data => {
        this.loadingController.dismiss();
        const jData = JSON.parse(data);
        for (const i of jData) {
          if (i.Grade === '') {
            this.addGrade(i.Course, '', JSON.stringify(i.Assignments));
          } else {
            this.addGrade(i.Course, i.Grade + '%', JSON.stringify(i.Assignments));
          }
        }
      });
    });
  }
}

