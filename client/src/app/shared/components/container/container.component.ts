import { Component, Input } from '@angular/core';

type ContainerType = 'default' | 'fluid';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @Input() type: ContainerType;

  constructor() {
    this.type = 'default';
  }
}
