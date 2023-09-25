import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateNotesComponent } from './components/notes/create-notes/create-notes.component';

@Component({
  standalone: true,
  imports: [
    CreateNotesComponent,
    FooterComponent,
    HeaderComponent,
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'crudangular';
}
