import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = '';
  isUsernameEmpty: boolean = false;
  isDisplaying: boolean = false;
  buttonClicks: string[] = [];

  onResetUsername(event: Event) {
    this.username = '';
    this.isUsernameEmpty = false;
  }

  checkIfUsernameIsEmpty(event: Event): void {
    this.isUsernameEmpty = (<HTMLInputElement>event.target).value !== '';
  }

  showHidden (event: Event): void {
    this.isDisplaying = !this.isDisplaying;
    this.registerButtonClicks(event);
  }

  private registerButtonClicks(event: Event): void {
    let toDate = new Date(event.timeStamp);
    let data = `${toDate.getMinutes()}:${toDate.getUTCSeconds()}`
    this.buttonClicks.push(data);
  }
}
