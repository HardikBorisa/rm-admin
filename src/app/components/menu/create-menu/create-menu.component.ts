import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private menuService: MenuService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      sub_title: ['', Validators.required],
      price: ['', Validators.required],
      type: [null, Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission
    console.log(this.myForm.value);
    const formData = this.myForm.value;
    // this.toastr.success('Menu Created');
    this.menuService.createMenuItem(formData).subscribe(
      (response) => {
        console.log('Menu item created successfully:', response);
        this.toastr.success('Menu Created');
        // Optionally, reset the form after successful submission
        this.myForm.reset();
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.error('Error creating menu item:', error);
        this.toastr.error('Failed to create menu');
      }
    );

  }
}
