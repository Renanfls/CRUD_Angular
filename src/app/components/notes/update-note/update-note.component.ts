import { lucideScrollText } from '@ng-icons/lucide';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnRadioComponent, BrnRadioGroupComponent } from '@spartan-ng/ui-radiogroup-brain';
import { HlmRadioDirective, HlmRadioGroupDirective, HlmRadioIndicatorComponent } from '@spartan-ng/ui-radiogroup-helm';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
  ],
  providers: [NoteService],
  viewProviders: [provideIcons({ lucideScrollText })],
  templateUrl: './update-note.component.html',
})
export class UpdateNoteComponent implements OnInit {
  note: Note = {
    id: 0,
    content: '',
    subject: '',
    model: '',
  };

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((note) => {
      this.note = note;
    });
  }

  updateNote() {
    this.service.update(this.note).subscribe(() => {
      this.router.navigate(['/readNote']);
    })
  }

  cancel() {
    this.router.navigate(['/readNote']);
  }
}
