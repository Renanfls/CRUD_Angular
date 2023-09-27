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
})
export class NoteComponent {
  model1 = 'teal-300';
  model2 = 'amber-300';
  model3 = 'red-300';

  @Input() note: Note = {
    id: 0,
    content: 'Test content',
    subject: 'Test',
    model: this.model1,
  };

  widthNote(): string {
    if (this.note.content.length >= 256) {
      return 'w-96';
    }
    return 'w-64';
  }
}
