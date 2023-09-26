import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-list-note',
  standalone: true,
  imports: [HlmButtonDirective, RouterModule],
  templateUrl: './list-note.component.html',
})
export class ListNoteComponent {}
