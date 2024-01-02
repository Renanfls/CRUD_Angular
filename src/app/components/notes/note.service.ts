import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly API = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {}

  read(page: number, filter: string): Observable<Note[]> {
    const itemsByPage = 8;

    let params = new HttpParams()
      .set("_page", page)
      .set("_limit", itemsByPage)

    if(filter.trim().length > 2) {
      params = params.set("q", filter)
    }

    return this.http.get<Note[]>(this.API, { params });
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
