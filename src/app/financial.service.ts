import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Financial } from './financial';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  private financialUrl = 'http://10.100.19.116:5000/api/financial';  // URL to web api

    /** GET emitent by id. Will 404 if id not found */
    getFinancials(emitentid: number): Observable<Financial[]> {
      const url = `${this.financialUrl}?emitentId=${emitentid}`;
      
      return this.http.get<Financial[]>(url);
  }

  constructor(private http: HttpClient) { }
}
