import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

<p [style.fontSIze.px]="tam">
  Hola mundo ... esta e suna etiqueta
</p>

<button class="btn btn-primary" (click)="tam=tam+5">
  <i class="fa fa-plus"></i>
</button>

<button class="btn btn-primary" (click)="tam=tam-5">
      <i class="fa fa-minus"></i>
    </button>
`,
styles: [
  ]
})
export class NgStyleComponent {

  tam:number = 10;
}
