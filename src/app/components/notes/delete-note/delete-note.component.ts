import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Note } from '../note';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-delete-note',
  standalone: true,
  imports: [HttpClientModule, HlmButtonDirective],
  providers: [NoteService],
  styleUrls: ['./delete-note.component.css'],
  templateUrl: './delete-note.component.html',
})
export class DeleteNoteComponent implements OnInit {
  note: Note = {
    id: 0,
    content: '',
    subject: '',
    model: '',
  };

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((note) => {
      this.note = note;
    });
  }

  deleteNote() {
    if (this.note.id) {
      this.service.delete(this.note.id).subscribe(() => {
        this.router.navigate(['/readNote']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/readNote']);
  }
}
