import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent {
  menu:any = [
    {
      "id": 1,
      "title": "Coffee",
      "sub_title": "Coffee,Milk",
      "price": "300"
    }
  ]




  myForm!: FormGroup;
  itemid:any = 0;
  constructor(private fb: FormBuilder , private toastr: ToastrService,private menuService: MenuService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      sub_title: ['', Validators.required],
      price: ['', Validators.required],
      type: [null, Validators.required]
    });

    this.route.params.subscribe(params => {
      this.itemid = +params['id'];
      console.log(this.itemid);
      
      this.patchForm();
    });
    this.patchForm();
  }

  patchForm(){
    
      const itemId = this.itemid; // Change this to the ID of the menu item you want to edit
      this.menuService.getMenuItemById(itemId).subscribe(
        (data) => {
          this.menu = data;
          console.log(data);
          
          // this.patchForm();
          if (this.menu.length > 0) {
            const menuItem = this.menu[0]; // Assuming there's only one item in the menu array
            this.myForm.patchValue({
              title: menuItem.title,
              sub_title: menuItem.sub_title,
              price: menuItem.price,
              type:menuItem.type
            });
          }
        },
        (error) => {
          console.error('Error fetching menu item:', error);
        }
      );
    
  
  }

  onSubmit() {
    // Handle form submission
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      // Assuming you have a property 'id' in your form data
      formData.id = this.menu[0].id; 
      console.log(this.menu[0].id);
      
      // Add the ID to the form data
      this.menuService.updateMenuItem(formData).subscribe(
        (response) => {
          console.log('Menu item updated successfully:', response);
          this.toastr.success('Menu Edited');
          this.router.navigate(['/menu']);
          // Handle success, e.g., display a success message
        },
        (error) => {
          console.error('Error updating menu item:', error);
          this.toastr.error('Failed to edit menu');
          // Handle error, e.g., display an error message
        }
      );
    } else {
      // Handle form validation errors
    }
  
  }


}
