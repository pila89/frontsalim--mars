import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFournisseurComponent } from './table-fournisseur.component';

describe('TableFournisseurComponent', () => {
  let component: TableFournisseurComponent;
  let fixture: ComponentFixture<TableFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
