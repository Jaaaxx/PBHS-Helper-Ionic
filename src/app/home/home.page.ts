import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Plugins} from '@capacitor/core';
import {LoadingController} from '@ionic/angular';

const {Storage} = Plugins;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

    constructor(private router: Router, public loadingController: LoadingController) {
    }

    async getLogin() {
        const ret = await Storage.get({key: 'login'});
        return JSON.parse(ret.value);
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
        this.getLogin().then(r => document.getElementById('currentUserHO').innerHTML = `Sign Out: <b>${r.un}</b>`);
    }

    ionViewWillEnter() {
        this.loadingController.dismiss().catch(() => {
        });
    }

    gotoVC() {
        window.open('https://bcps.browardschools.com/VirtualCounselor/', '_system', 'location=yes');
    }

    gotoGrades() {
        this.router.navigateByUrl('/grades');
    }

    gotoCalendar() {
        this.router.navigateByUrl('/calendar');
    }
}
