import { Component, OnInit } from '@angular/core';
import { BusinessService, Business } from '../services/business.service';
@Component({
  selector: 'app-business-list-page',
  templateUrl: './business-list-page.component.html',
  styleUrls: ['./business-list-page.component.scss'],
})
export class BusinessListPageComponent implements OnInit {
  businesses: Business[] = [];

  constructor(private businessService: BusinessService) {}

  ngOnInit() {
    this.loadBusinesses();
  }

  loadBusinesses() {
    this.businessService.getBusinesses().subscribe((businesses) => {
      businesses = businesses.sort((a, b) => a.name.localeCompare(b.name));
      this.businesses = businesses;
    });
  }

  onDelete(id: string) {
    this.businesses = this.businesses
      .filter((b) => b._id !== id)
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
