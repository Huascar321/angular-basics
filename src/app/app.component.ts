import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username:string = '';
  isUsernameEmpty:boolean = false;

  onResetUsername(event: Event) {
    this.username = '';
    this.isUsernameEmpty = false;
  }

  checkIfUsernameIsEmpty(event: Event): void {
    this.isUsernameEmpty = (<HTMLInputElement>event.target).value !== '';
  }
}
