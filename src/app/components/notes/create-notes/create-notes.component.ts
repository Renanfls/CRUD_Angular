import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
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


export class CreateNotesComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    private service: NoteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({ 
      content: ['Formulário reativo'],
      subject: ['Teste'],
      model: ['model1'],
    })
  }

  createNote() {
    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(['/readNote']);
    });
  }

  cancel() {
    this.router.navigate(['/readNote']);
  }
}
