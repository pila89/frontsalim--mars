import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sortview',
  templateUrl: './sortview.component.html',
  styleUrls: ['./sortview.component.scss'],
})
export class SortviewComponent implements OnInit {
  @Output () showEvent:EventEmitter<any> = new EventEmitter<any>();
  @Output() sortEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() displayEvent: EventEmitter<any> = new EventEmitter<any>();

  itemCount = 12;
  constructor() {}

  ngOnInit(): void {}

  sortList(newSort: string): void {
    this.sortEvent.emit(newSort);
  }
  updateList(count: number): void {
    this.showEvent.emit(count)
  }
  displayView(type: string): void {
    this.displayEvent.emit(type)
  }

}
