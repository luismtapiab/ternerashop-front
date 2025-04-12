import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button (click)="click($event)">
        {{ label() }}
    </button>
  `,
  styles: `
  button {
    background: white;
    color: black;
    padding: 3px;
    border-radius: 10px;
    font-size: 1em;
  }
  button:hover {
    background: lightgrey;
  }`
})
export class ButtonComponent {
    label = input('');
    btnClicked = output();

    click(e:Event){
        e.stopPropagation();
        this.btnClicked.emit();
    }
}
