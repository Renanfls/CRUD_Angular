import { Route } from '@angular/router';
import { CreateNotesComponent } from './components/notes/create-notes/create-notes.component';
import { ListNoteComponent } from './components/notes/list-note/list-note.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'listNote',
    pathMatch: 'full',
  },
  {
    path: 'createNote',
    component: CreateNotesComponent,
  },
  {
    path: 'listNote',
    component: ListNoteComponent,
  },
];
