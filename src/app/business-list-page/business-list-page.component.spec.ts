import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessListPageComponent } from './business-list-page.component';

describe('BusinessListPageComponent', () => {
  let component: BusinessListPageComponent;
  let fixture: ComponentFixture<BusinessListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessListPageComponent]
    });
    fixture = TestBed.createComponent(BusinessListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
