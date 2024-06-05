import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: UserService,
    public dialogRef: MatDialogRef<LogInComponent>
  ) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    var data = {
      username: this.loginForm.value.userId,
      password: this.loginForm.value.password
    }

    this.authService.login(data).subscribe(
      data => {
        this.dialogRef.close();
        if(data.status === "success"){
          this.authService.setLoggedInUser(this.loginForm.value.userId);
        } else {
          alert('Login failed, Please try again');
        }
      },
      error => {
        this.error = error;
        this.loading = false;
        alert('Login failed: ' + error.message);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
