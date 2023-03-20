import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAgentComponent } from './add-edit-agent.component';

describe('AddEditAgentComponent', () => {
  let component: AddEditAgentComponent;
  let fixture: ComponentFixture<AddEditAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
