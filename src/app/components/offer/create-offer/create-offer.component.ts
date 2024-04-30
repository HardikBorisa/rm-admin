import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent {
  offerForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private offerService:OfferService, private router: Router) { }

  ngOnInit(): void {
    this.offerForm = this.fb.group({
      title: ['', Validators.required],
      type: [null, Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission
    if (this.offerForm.valid) {
      this.offerService.createOffer(this.offerForm.value).subscribe(
        (response) => {
          console.log('Offer created successfully:', response);
          this.toastr.success('Offer Created');
          // Optionally, reset the form after successful submission
          this.offerForm.reset();
          this.router.navigate(['/offer']);
          // You can perform further actions like displaying a success message
        },
        (error) => {
          console.error('Error creating offer:', error);
          this.toastr.error('Failed to create offer');
          // You can display an error message to the user
        }
      );
    } else {
      // Form is invalid, display errors or prevent submission
    }
  }
}
