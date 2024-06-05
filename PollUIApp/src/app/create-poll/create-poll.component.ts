import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PollService } from '../poll.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {
  pollForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  option = '';

  loggedInUser = "";
  observer: any;

  constructor(
    private fb: FormBuilder,
    private pollService: PollService,
    private userService: UserService,
    public dialogRef: MatDialogRef<CreatePollComponent>
  ) {
    this.pollForm = this.fb.group({
      question: ['', Validators.required],
      options: ['', Validators.required]
    });
    this.observer = this.userService.getLoggedInUser().subscribe(data => this.loggedInUser = data);
  }

  // Convenience getter for easy access to form fields
  get f() { return this.pollForm.controls; }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.pollForm.invalid) {
      return;
    }

    this.loading = true;

    var data = {
      question: this.pollForm.value.question,
      options: this.pollForm.value.options.split(","),
      createdBy: this.loggedInUser
    }

    this.pollService.createPoll(data).subscribe(
      data => {
        this.dialogRef.close();
        this.pollService.updatePolls();
      },
      error => {
        this.error = error;
        this.loading = false;
        alert('Unable to Create New Poll: ' + error.message);
      }
    );
  }

  addOptions(option: string): void {
    if(option){
      var currValue: string = this.f['options'].value;
      if(!currValue){
        this.f['options'].setValue(option);
      } else if(currValue.charAt(0) === ','){
        currValue = currValue.substring(1);
        this.f['options'].setValue(currValue+","+option);
      } else {
        this.f['options'].setValue(currValue+","+option);
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }
}
