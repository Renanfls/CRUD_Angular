import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideGithub } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HlmButtonDirective,
    BrnSeparatorComponent,
    HlmSeparatorDirective,
    NgIconComponent,
    CommonModule,
  ],
  viewProviders: [provideIcons({ lucideGithub })],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
