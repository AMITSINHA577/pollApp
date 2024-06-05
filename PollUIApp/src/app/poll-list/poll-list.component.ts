import { Component } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../polls.type';
import { MatDialog } from '@angular/material/dialog';
import { VoteComponent } from '../vote/vote.component';
import { ResultComponent } from '../result/result.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent {

  polls: Poll[] = [];
  loggedInUser = "";
  observer: any;

  constructor(private pollService: PollService,
    public dialog: MatDialog,
    private userService: UserService
  ){
    this.observer = this.userService.getLoggedInUser().subscribe(data => this.loggedInUser = data);
    this.pollService.refreshPoll().subscribe(data => this.getPolls());
  }

  ngOnInit(): void {
    this.getPolls();
  }

  getPolls(): void {
    this.pollService.getPolls().subscribe(
      data => {
        if(data){
          this.polls = data;
        }
      }, error => {
        alert("Error while getitng poll list : "+error.message);
      }
    )
  }

  openVote(poll: Poll): void {
    const dialogRef = this.dialog.open(VoteComponent, {
      width: '400px',
      data: poll
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openResult(poll: Poll): void {
    const dialogRef = this.dialog.open(ResultComponent, {
      width: '400px',
      data: poll
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  ngOnDestroy() {
    this.observer.unsubscribe();
  }
    

}
