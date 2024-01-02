import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-load-more-button',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective],
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css'],
})
export class LoadMoreButtonComponent {
  @Input() moreNotes = false;
}
