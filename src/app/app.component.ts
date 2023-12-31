import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent, 
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'crudangular';
}
