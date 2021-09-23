import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  minutes = 0;
  gender = 'male';

  increaseMinutes(i: number): void {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }

  changeGenderToMale() {
    this.gender = 'male';
  }

  changeGenderToFemale() {
    this.gender = 'female';
  }

  changeGenderToOther() {
    this.gender = 'other';
  }
}
