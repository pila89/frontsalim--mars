import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() categories!: any;
  @Output() categorieFilter: EventEmitter<any> = new EventEmitter<any>();

  panelOpenState = false;
  click(xxx: string) {
    this.categorieFilter.emit(xxx);
  }
}
