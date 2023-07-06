import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessListItemComponent } from './business-list-item.component';

describe('BusinessListItemComponent', () => {
  let component: BusinessListItemComponent;
  let fixture: ComponentFixture<BusinessListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessListItemComponent]
    });
    fixture = TestBed.createComponent(BusinessListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
