import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly API = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {}

  list(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API);
  }
}
