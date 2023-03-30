import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnousComponent } from './contactnous.component';

describe('ContactnousComponent', () => {
  let component: ContactnousComponent;
  let fixture: ComponentFixture<ContactnousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactnousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactnousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
