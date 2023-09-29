import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-read-note',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NoteComponent,
    HlmButtonDirective,
    RouterModule,
    HttpClientModule,
  ],
  providers: [NoteService],
  templateUrl: './read-note.component.html',
})
export class ReadNoteComponent implements OnInit {
  public listNotes: Note[] = [];

  constructor(private service: NoteService) {}
  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.service.read().subscribe((listNotes: Note[]) => {
      this.listNotes = listNotes;
    });
  }
}
