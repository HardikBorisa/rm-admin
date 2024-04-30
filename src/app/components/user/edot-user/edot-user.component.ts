import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edot-user',
  templateUrl: './edot-user.component.html',
  styleUrls: ['./edot-user.component.scss']
})
export class EdotUserComponent {
  userForm!: FormGroup;
  userId!:any;
  constructor(private fb: FormBuilder, 
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {}

    ngOnInit(): void {
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
      this.route.params.subscribe(params => {
        this.userId = +params['id'];
        console.log(this.userId);
        this.getUserById(this.userId);
      });
    }
  
    getUserById(userId: number) {
      this.userService.getUserById(userId).subscribe(
        (data: any) => {
          let user = data[0];
          console.log(user);
          
          // Patch the form with fetched user data
          this.userForm.patchValue({
            name: user.name,
            email: user.email,
            password: user.password
            // For security reasons, password should not be retrieved here
          });
        },
        (error) => {
          console.error('Error fetching user:', error);
          this.toastr.error('Error fetching user', 'Error');
        }
      );
    }
  


    onSubmit() {
      if (this.userForm.invalid) {
        return;
      }
  
      // Send edited user data to the server
      this.userService.updateUser(this.userId, this.userForm.value).subscribe(
        () => {
          this.toastr.success('User updated successfully', 'Success');
          this.router.navigate(['/users']);
        },
        (error) => {
          console.error('Error updating user:', error);
          this.toastr.error('Error updating user', 'Error');
        }
      );
    }
 
}
