import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get form() {
    return this.userForm.controls;
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.userService.createUser(this.userForm.value).subscribe(
      (response) => {
        console.log('User created successfully:', response);
        // Reset the form after successful submission
        this.toastr.success('User created successfully');
        this.router.navigate(['/']);
        this.userForm.reset();
      },
      (error) => {
        console.error('Error creating user:', error);
        this.toastr.error('Failed to create User');
      }
    );
  }
}
