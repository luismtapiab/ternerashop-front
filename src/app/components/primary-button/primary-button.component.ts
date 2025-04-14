import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="click($event)">
        {{ label() }}
    </button>
  `,
  styles: `
  button {
    background: var(--medium-blue);
    color: black;
    padding: 3px;
    border-radius: 10px;
    font-size: 1.25em;
  }
  button:hover {
    background: lightgray;
  }
  `
})
export class PrimaryButtonComponent {
    label = input('');
    stop = input(false);
    btnClicked = output();

    click = (event:Event) => {
        if(this.stop()) event.stopPropagation();
        this.btnClicked.emit();
    }
}
