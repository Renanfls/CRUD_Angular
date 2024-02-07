import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideEdit, lucideScrollText, lucideTrash2 } from '@ng-icons/lucide';
import { bootstrapHeart, bootstrapHeartFill } from '@ng-icons/bootstrap-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Note } from '../note';

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

  widthNote(): string {
    return this.note.content.length >= 256 ? 'w-96' : 'w-64';
  }

  changeFavoriteIcon(): string {
    return this.note.favorite == false ? 'bootstrapHeart' : 'bootstrapHeartFill';
  }
}
