import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiramtionModalComponent } from './confiramtion-modal.component';

describe('ConfiramtionModalComponent', () => {
  let component: ConfiramtionModalComponent;
  let fixture: ComponentFixture<ConfiramtionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiramtionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiramtionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
