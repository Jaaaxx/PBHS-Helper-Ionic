import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Plugins} from '@capacitor/core';

const {Storage} = Plugins;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

    constructor(private router: Router) {
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
        const ret = await Storage.get({key: 'login'});
        return JSON.parse(ret.value);
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.getLogin().then(r => document.getElementById('signed_in').innerHTML = `Signed in as <b>${r.un}</b>`);
    }

    gotoVC() {
        window.open('https://bcps.browardschools.com/VirtualCounselor/', '_system', 'location=yes');
    }

    gotoGrades() {
        this.router.navigateByUrl('/grades');
    }

    signOut() {
        this.setLogin('', '').then(r => this.router.navigateByUrl('/login'));
    }

    gotoCalendar() {
        this.router.navigateByUrl('/calendar');
    }
}
