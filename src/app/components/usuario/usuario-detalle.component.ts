import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent {
  constructor(private router:ActivatedRoute) {
    this.router.parent?.params.subscribe(parametrohijo=>console.log(parametrohijo)
    )
  }

}
