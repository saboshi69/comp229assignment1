import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Business } from '../../services/business.service';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-business-list-item',
  templateUrl: './business-list-item.component.html',
  styleUrls: ['./business-list-item.component.scss'],
})
export class BusinessListItemComponent {
  @Input() business!: Business;
  @Output() delete = new EventEmitter<string>(); // add this

  constructor(private businessService: BusinessService) {}

  onDelete() {
    this.businessService.deleteBusiness(this.business._id).subscribe(() => {
      this.delete.emit(this.business._id); // emit the id of the deleted business
    });
  }
}
