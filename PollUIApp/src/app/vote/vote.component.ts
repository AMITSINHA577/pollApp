import { Component, Inject, Input } from '@angular/core';
import { Poll } from '../polls.type';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoteService } from '../vote.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {
  voteForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  loggedInUser = "";
  observer: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Poll,
  private fb: FormBuilder,
  private voteService: VoteService,
  private userService: UserService,
  public dialogRef: MatDialogRef<VoteComponent>){
    this.voteForm = this.fb.group({
      option: ['', Validators.required]
    });
    this.observer = this.userService.getLoggedInUser().subscribe(data => this.loggedInUser = data);
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.voteForm.invalid) {
      return;
    }

    this.loading = true;
    var data = {
      poll: {
        id: this.data.id
      },
      username: this.loggedInUser,
      selectedOption: this.voteForm.value.option
    };
    this.voteService.vote(data).subscribe(
      data => {
        this.dialogRef.close();
      }, error => {
        this.error = error;
        this.loading = false;
        alert('Voting failed: ' + error.message);
      }
    )
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }

}
