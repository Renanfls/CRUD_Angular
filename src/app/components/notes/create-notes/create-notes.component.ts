import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
import { Note } from '../note';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-create-notes',
  standalone: true,
  imports: [
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmRadioDirective,
    HlmRadioGroupDirective,
    BrnRadioComponent,
    NgIconComponent,
    BrnRadioGroupComponent,
    HlmRadioIndicatorComponent,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [NoteService],
  viewProviders: [provideIcons({ lucideScrollText })],
  templateUrl: './create-notes.component.html',
})
export class CreateNotesComponent {
  note: Note = {
    content: '',
    subject: '',
    model: 'model1',
  };

  constructor(
    private service: NoteService,
    private router: Router
  ) {}
  createNote() {
    this.service.create(this.note).subscribe(() => {
      this.router.navigate(['/listNote']);
    });
  }

  cancel() {
    this.router.navigate(['/listNote']);
  }
}
