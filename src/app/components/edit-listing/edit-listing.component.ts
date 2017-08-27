import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id;
  title;
  owner;
  city;
  bedrooms;
  price;
  type;
  image;
  bathrooms;
  description;
  street;
  size;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingsDetails(this.id).subscribe(listing => {
      this.title = listing.title;
      this.owner = listing.owner;
      this.city = listing.city;
      this.bedrooms = listing.bedrooms;
      this.price = listing.price;
      this.type = listing.type;
      this.bathrooms = listing.bathrooms;
      this.description = listing.description;
      this.street = listing.street;
      this.size = listing.size
    });
  }

  onEditSubmit(){
    let listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type,
      bathrooms : this.bathrooms,
      description : this.description,
      street : this.street,
      size : this.size
    }

    this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['/listings']);

  }

}
