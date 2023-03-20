import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentifcationComponent } from './authentifcation.component';

describe('AuthentifcationComponent', () => {
  let component: AuthentifcationComponent;
  let fixture: ComponentFixture<AuthentifcationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentifcationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentifcationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
