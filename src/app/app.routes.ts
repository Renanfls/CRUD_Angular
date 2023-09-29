import { Route } from '@angular/router';
import { CreateNotesComponent } from './components/notes/create-notes/create-notes.component';
import { ReadNoteComponent } from './components/notes/read-note/read-note.component';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { UpdateNoteComponent } from './components/notes/update-note/update-note.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'readNote',
    pathMatch: 'full',
  },
  {
    path: 'createNote',
    component: CreateNotesComponent,
  },
  {
    path: 'readNote',
    component: ReadNoteComponent,
  },
  {
    path: 'notes/deleteNote/:id',
    component: DeleteNoteComponent,
  },
  {
    path: 'notes/updateNote/:id',
    component: UpdateNoteComponent,
  },
];
