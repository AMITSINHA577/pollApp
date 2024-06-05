import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: UserService,
    public dialogRef: MatDialogRef<RegistrationComponent>
  ) {
    this.registrationForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // Convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    this.loading = true;

    var data = {
      username: this.registrationForm.value.userId,
      password: this.registrationForm.value.password,
      role: "USER"
    }

    this.authService.registerUsr(data).subscribe(
      data => {
        this.dialogRef.close();
        console.log(data);
        alert('User created successfully, Please login');
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
