import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class MenuService {
  search: string = '';

  @Output() change: EventEmitter<string> = new EventEmitter();

  set(term: string) {
    this.search = term;
    this.change.emit(this.search);
  }
}
