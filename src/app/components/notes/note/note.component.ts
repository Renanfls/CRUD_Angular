import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideEdit, lucideScrollText, lucideTrash2 } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [NgClass, NgIconComponent, HlmButtonDirective],
  viewProviders: [provideIcons({ lucideScrollText, lucideEdit, lucideTrash2 })],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note: Note = {
    id: 0,
    content: 'Test content',
    subject: 'Test',
    model: 'model1',
  };

  widthNote(): string {
    return this.note.content.length >= 256 ? 'w-96' : 'w-64';
  }
}
