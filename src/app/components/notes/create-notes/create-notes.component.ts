import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideScrollText } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import {
  BrnRadioComponent,
  BrnRadioGroupComponent,
} from '@spartan-ng/ui-radiogroup-brain';
import {
  HlmRadioDirective,
  HlmRadioGroupDirective,
  HlmRadioIndicatorComponent,
} from '@spartan-ng/ui-radiogroup-helm';
@Component({
  selector: 'app-create-notes',
  standalone: true,
  imports: [
    HlmLabelDirective,
    HlmInputDirective,
    BrnRadioComponent,
    BrnRadioGroupComponent,
    HlmRadioDirective,
    HlmRadioGroupDirective,
    HlmRadioIndicatorComponent,
    NgIconComponent,
    HlmButtonDirective,
    FormsModule,
  ],
  viewProviders: [provideIcons({ lucideScrollText })],
  templateUrl: './create-notes.component.html',
})
export class CreateNotesComponent {
  note = {
    id: '1',
    content: 'Teste',
    subject: 'Dev',
    model: 'model1',
  };
  createNote() {
    alert('Nota criada!');
  }

  cancel() {
    alert('Ação cancelada!');
  }
}
