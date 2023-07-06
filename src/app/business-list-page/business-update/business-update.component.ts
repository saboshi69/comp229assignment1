import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService, Business } from '../../services/business.service';

@Component({
  selector: 'app-business-update',
  templateUrl: './business-update.component.html',
  styleUrls: ['./business-update.component.scss'],
})
export class BusinessUpdateComponent implements OnInit {
  updateBusinessForm: FormGroup; // removed the '!'
  business!: Business;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private router: Router
  ) {
    this.updateBusinessForm = this.formBuilder.group({
      // initializing to empty formGroup
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {
    const businessId = this.route.snapshot.paramMap.get('id');
    if (businessId) {
      this.businessService.getBusiness(businessId).subscribe((business) => {
        this.business = business;
        // using patchValue to update the formGroup when the data arrives
        this.updateBusinessForm.patchValue({
          name: business.name,
          phone: business.phone,
          email: business.email,
        });
      });
    }
  }

  onSubmit() {
    if (this.updateBusinessForm.valid && this.business) {
      this.businessService
        .updateBusiness(this.business._id, this.updateBusinessForm.value)
        .subscribe(() => {
          console.log('Business updated successfully');
          this.router.navigate(['/business']);
        });
    }
  }

  onDelete() {
    if (this.business) {
      this.businessService.deleteBusiness(this.business._id).subscribe(() => {
        console.log('Business deleted successfully');
        this.router.navigate(['/business']); // navigating to the business list page
      });
    }
  }

  onCancel() {
    this.router.navigate(['/business']); // navigating to the business list page
  }
}
