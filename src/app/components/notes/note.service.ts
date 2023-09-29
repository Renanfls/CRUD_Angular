import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly API = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {}

  read(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API);
  }

  create(note: Note): Observable<Note> {
    return this.http.post<Note>(this.API, note);
  }

  update(note: Note): Observable<Note> {
    const url = `${this.API}/${note.id}`;
    return this.http.put<Note>(url, note);
  }

  delete(id: number): Observable<Note> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Note>(url);
  }

  searchById(id: number): Observable<Note> {
    const url = `${this.API}/${id}`;
    return this.http.get<Note>(url);
  }
}
