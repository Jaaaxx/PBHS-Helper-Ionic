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
        this.router.navigateByUrl('/login');
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.getLogin().then(r => document.getElementById('currentUserHO').innerHTML = `Sign Out: <b>${r.un}</b>`);
        this.loadingController.dismiss().catch(() => {
        });
        this.getLogin().then(r => {
            try {
                if (r.un === '' || r.pw === '') {
                    this.router.navigateByUrl('/login');
                }
            } catch {
                this.router.navigateByUrl('/login');
            }
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
