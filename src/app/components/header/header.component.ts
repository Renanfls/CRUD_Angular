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
  template: `
    <header class="px-6 py-3 flex items-center justify-between border-b">
      <a href="http://localhost:4200"
        ><h1 class="text-xl font-bold">crud.angular</h1></a
      >

      <div class="flex items-center gap-3">
        <span class="text-sm text-muted-foreground select-none"> Repositorio </span>

        <brn-separator hlmSeparator orientation="vertical" class="h-6" />
        <a target="_blank" href="https://github.com/Renanfls/CRUD_Angular">
          <button hlmBtn variant="outline">
            <ng-icon name="lucideGithub" class="w-4 h-4 mr-2" />
            GitHub
          </button>
        </a>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
