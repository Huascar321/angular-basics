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
  counter: number = 0;
  areFiveElements: boolean = false;

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
    this.counter === 4 ? this.areFiveElements = true : false;
    let toDate = new Date(event.timeStamp);
    let data = `${toDate.getMinutes()}:${toDate.getUTCSeconds()}`
    this.buttonClicks.push(data);
    this.counter++;
  }

  getColor(): string {
    return this.areFiveElements ? 'blue' : '' ;
  }

}
