import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Note } from '../note';
import { NoteComponent } from '../note/note.component';
@Component({
  selector: 'app-list-note',
  standalone: true,
  imports: [NgIf, NgFor, NoteComponent, HlmButtonDirective, RouterModule],
  templateUrl: './list-note.component.html',
})
export class ListNoteComponent {
  listNotes: Note[] = [
    {
      id: 1,
      content: 'Anotação capturada do backend',
      subject: 'Backend',
      model: 'model1',
    },
    {
      id: 2,
      content: 'Anotação capturada do backend Anotação capturada do backendAnotação capturada do backendAnotação capturada do backendAnotação capturada do backendAnotação capturada do backendAnotação capturada do backendAnotação capturada do backendAnotação capturada do backend',
      subject: 'Backend',
      model: 'model2',
    },
    {
      id: 3,
      content: 'Anotação capturada do backend',
      subject: 'Backend',
      model: 'model3',
    },
  ];

  // constructor(private service: NoteService) {}

  // ngOnInit(): void {
  //   this.service.list().subscribe((listNotes) => {
  //     this.listNotes = listNotes
  //   });
  // }
}
