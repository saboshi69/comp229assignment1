import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessPageComponent } from './update-business-page.component';

describe('UpdateBusinessPageComponent', () => {
  let component: UpdateBusinessPageComponent;
  let fixture: ComponentFixture<UpdateBusinessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBusinessPageComponent]
    });
    fixture = TestBed.createComponent(UpdateBusinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
