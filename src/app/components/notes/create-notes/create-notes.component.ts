import { Component } from '@angular/core';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'app-create-notes',
  standalone: true,
  imports: [
    HlmLabelDirective,
    HlmInputDirective,
  ],
  templateUrl: './create-notes.component.html',
})
export class CreateNotesComponent {}
