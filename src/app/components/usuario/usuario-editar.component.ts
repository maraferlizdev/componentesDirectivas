import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioEditarComponent {
  constructor(private router:ActivatedRoute) {
    this.router.parent?.params.subscribe(parametrohijo=>console.log(parametrohijo)
    )
  }

}
