import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-3 text-center text-muted-foreground">
      <small> &copy; 2023 Renanfls. Todos os direitos reservados. </small>
    </footer>
  `,
})
export class FooterComponent {}
