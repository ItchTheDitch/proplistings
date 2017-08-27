import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title:any;
  owner:any;
  city:any;
  bedrooms:any;
  price:any;
  type:any;
  image:any;
  bathrooms:any;
  description:any;
  street:string;
  size:string;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type,
      bathrooms: this.bathrooms,
      description:this.description,
      street: this.street,
      size: this.size
    }


    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);

  }
}
