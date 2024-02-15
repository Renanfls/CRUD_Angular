import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { NoteComponent } from '../note/note.component';
import { LoadMoreButtonComponent } from './load-more-button/load-more-button.component';

@Component({
  selector: 'app-read-note',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    HlmInputDirective,
    HlmButtonDirective,
    NgIconComponent,
    NoteComponent,
    LoadMoreButtonComponent,
  ],
  providers: [NoteService],
  viewProviders: [provideIcons({ lucideSearch })],
  templateUrl: './read-note.component.html',
})
export class ReadNoteComponent implements OnInit {
  public listNotes: Note[] = [];
  currentPage = 1;
  moreNotes = true;
  filter = '';
  favorites = false;
  listFavorites: Note[] = [];
  title = 'Mural de Notas';

  constructor(
    private service: NoteService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.service
      .read(this.currentPage, this.filter, this.favorites)
      .subscribe((listNotes: Note[]) => {
        this.listNotes = listNotes;
      });
  }

  loadMoreNotes(): void {
    this.service
      .read(++this.currentPage, this.filter, this.favorites)
      .subscribe((listNotes) => {
        this.listNotes.push(...listNotes);
        if (!listNotes.length) {
          this.moreNotes = false;
        }
      });
  }

  searchNotes() {
    this.moreNotes = true;
    this.currentPage = 1;
    this.service.read(this.currentPage, this.filter, this.favorites).subscribe((listNotes) => {
      this.listNotes = listNotes;
    });
  }

  reloadComponent() {
    this.favorites = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  readFavorites() {
    this.title = 'Favoritos';
    this.favorites = true;
    this.moreNotes = true;
    this.currentPage = 1;
    this.service.read(this.currentPage, this.filter, this.favorites)
    .subscribe(listNoteFavorites => {
      this.listNotes = listNoteFavorites;
      this.listFavorites = listNoteFavorites;
    });
  }
}
