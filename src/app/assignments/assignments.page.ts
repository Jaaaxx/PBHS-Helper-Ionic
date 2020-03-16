import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})

export class AssignmentsPage implements OnInit {

  assignments: string;

  constructor(private route: ActivatedRoute, private router: Router, public loadingController: LoadingController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.assignments = this.router.getCurrentNavigation().extras.state.jsonData;
      }
    });
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

  addGrade(name, grade) {
    const rows = document.getElementById('assignmentRows');
    const nameContainer = document.createElement('li');
    const n1 = document.createElement('h2');
    n1.textContent = name;
    nameContainer.append(n1);
    const gradeContainer = document.createElement('li');
    const g1 = document.createElement('h3');
    if (Number.isNaN(grade)) {
      g1.textContent = '';
    } else {
      g1.style.backgroundColor = this.selectColor(grade);
      g1.textContent = grade + '%';
    }
    gradeContainer.append(g1);
    rows.append(nameContainer);
    rows.append(gradeContainer);
  }

  ngOnInit() {
    for (const i of JSON.parse(this.assignments)) {
      this.addGrade(i.Name, Math.floor((parseFloat(i.Points) / parseFloat(i.Max)) * 100));
    }
  }
}

