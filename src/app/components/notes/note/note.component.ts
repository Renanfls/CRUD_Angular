import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideEdit, lucideScrollText, lucideTrash2 } from '@ng-icons/lucide';
import { bootstrapHeart, bootstrapHeartFill } from '@ng-icons/bootstrap-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [NgClass, NgIconComponent, HlmButtonDirective, RouterModule],
  viewProviders: [provideIcons({ lucideScrollText, lucideEdit, lucideTrash2, bootstrapHeart, bootstrapHeartFill })],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note: Note = {
    id: 0,
    content: '',
    subject: '',
    model: '',
    favorite: false,
  };

  @Input() listFavorites: Note[] = [];
  
  constructor(private service: NoteService) {}

  widthNote(): string {
    return this.note.content.length >= 256 ? 'w-96' : 'max-w-md';
  }

  changeFavoriteIcon(): string {
    return this.note.favorite == false ? 'bootstrapHeart' : 'bootstrapHeartFill';
  }

  updateFavorites() {
    this.service.changeFavorite(this.note).subscribe(() => {
      this.listFavorites.splice(this.listFavorites.indexOf(this.note), 1);
    });
  }
}
