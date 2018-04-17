import {Component, Input} from '@angular/core';

@Component({
  selector: 'tab',
  template: ``,
})
export class Tab {
  @Input()
  city: any;

  constructor(data) {
    this.city = data;
  }
}
