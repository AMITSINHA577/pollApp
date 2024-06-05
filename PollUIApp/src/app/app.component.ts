import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './reistration/registration.component';
import { UserService } from './user.service';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollListComponent } from './poll-list/poll-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PollUIApp';
  loggedInUser = "";
  observer: any;


  constructor(public dialog: MatDialog, private userService: UserService
  ){
    this.observer = this.userService.getLoggedInUser().subscribe(data => this.loggedInUser = data);
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LogInComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  openSignUoModal(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openCreatePoll(): void {
    const dialogRef = this.dialog.open(CreatePollComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logOut() {
    this.userService.setLoggedInUser("");
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }
}
