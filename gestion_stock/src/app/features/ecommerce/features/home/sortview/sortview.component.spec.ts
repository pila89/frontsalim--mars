import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortviewComponent } from './sortview.component';

describe('SortviewComponent', () => {
  let component: SortviewComponent;
  let fixture: ComponentFixture<SortviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
