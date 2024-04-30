import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.userService.login({email, password}).subscribe(
        (response:any) => {
          console.log(response);
          localStorage.setItem('token',response.token)
          
          // Handle successful login
          console.log('Logged in successfully!', response);
          this.toastr.success('Logged In Successfully');
          this.router.navigate(['/']);
        },
        (error:any) => {
          // Handle login error
          console.error('Login failed:', error);
          this.toastr.error(' Login Failed');
        }
      );
    }
  }
}
