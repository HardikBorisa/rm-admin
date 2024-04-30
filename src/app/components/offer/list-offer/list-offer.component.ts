import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';


@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.scss']
})
export class ListOfferComponent implements OnInit {
  offers: any[] = [];

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offerService.getOffer().subscribe(
      (response: any[]) => {
        this.offers = response;
      },
      (error:any) => {
        console.error('Error fetching offers:', error);
      }
    );
  }

  deleteItem(id:any){
    this.offerService.deleteOffer(id).subscribe(
      ()=>{
   this.getOffers();
      },
      (error)=>{

      }
    )
  }
}
