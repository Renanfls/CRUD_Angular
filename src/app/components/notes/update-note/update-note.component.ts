import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  selector: 'app-update-note',
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
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [NoteService],
  viewProviders: [provideIcons({ lucideScrollText })],
  templateUrl: './update-note.component.html',
})
export class UpdateNoteComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((note) => {
      this.form = this.formBuilder.group({
        id: [note.id],
        content: [
          note.content,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        subject: [
          note.subject,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        model: [note.model],
        favorite: [note.favorite],
      });
    });
  }

  updateNote() {
    this.service.update(this.form.value).subscribe(() => {
      this.router.navigate(['/readNote']);
    });
  }

  cancel() {
    this.router.navigate(['/readNote']);
  }
}
