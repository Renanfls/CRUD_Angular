import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import { NoteService } from '../note.service';
@Component({
  selector: 'app-create-notes',
  standalone: true,
  imports: [
    CommonModule,
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmRadioDirective,
    HlmRadioGroupDirective,
    BrnRadioComponent,
    NgIconComponent,
    BrnRadioGroupComponent,
    HlmRadioIndicatorComponent,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
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
      content: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      subject: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      model: ['model1'],
      favorite: [false],
    });
  }

  createNote() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/readNote']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/readNote']);
  }
}
