import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateNotesComponent } from './components/notes/create-notes/create-notes.component';
import { ListNoteComponent } from './components/notes/list-note/list-note.component';

@Component({
  standalone: true,
  imports: [
    ListNoteComponent,
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
