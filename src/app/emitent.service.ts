import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Emitent } from './emitent';

@Injectable({
  providedIn: 'root'
})
export class EmitentService {

  private emitentsUrl = 'http://10.100.19.116:5000/api/emitent';  // URL to web api

  /** GET emitents from the server */
  getEmitents (): Observable<Emitent[]> {
    return this.http.get<Emitent[]>(this.emitentsUrl);
  }

  /** GET emitent by id. Will 404 if id not found */
  getEmitent(id: number): Observable<Emitent> {
      const url = `${this.emitentsUrl}/${id}`;
      
      return this.http.get<Emitent>(url);
  }

  constructor(private http: HttpClient) { }
}
