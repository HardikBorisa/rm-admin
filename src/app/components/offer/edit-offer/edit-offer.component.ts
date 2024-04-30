import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent {
  offerForm!: FormGroup;
  offerId: number = 0;
  offer:any;
  constructor(private fb: FormBuilder, private toastr: ToastrService, private route: ActivatedRoute, private offerServie:OfferService,private router: Router) { }

  ngOnInit(): void {
    this.offerForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.route.params.subscribe(params => {
      this.offerId = +params['id'];
      console.log(this.offerId);
      
      this.patchForm();
    });
    // this.patchForm();
  }

  patchForm(){
this.offerServie.getOfferById(this.offerId).subscribe(
  (data)=>{
    
    this.offer = data[0]
    console.log(this.offer);
    if (this.offer) {
      this.offerForm.patchValue({
        title : this.offer.title,
        type: this.offer.type
      })
      
    }
  }
)
  }
  onSubmit() {
    // Handle form submission
    if (this.offerForm.valid) {
      const updatedOfferData = this.offerForm.value;
      this.offerServie.updateOffer(this.offerId, updatedOfferData).subscribe(
        (response) => {
          console.log('Offer edited successfully:', response);
          // Handle success, e.g., display a success message
          this.toastr.success('Offer Edited');
          this.router.navigate(['/offer']);
        },
        (error) => {
          console.error('Error editing offer:', error);
          // Handle error, e.g., display an error message
        }
      );
    } else {
      // Form is invalid, display errors or prevent submission
    }
  }
}
