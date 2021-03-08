import { Imovel } from './../model/imovel';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const apiUrl = 'http://localhost:3000/data';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getImoveis() {
    return this.http.get<Imovel[]>(`${apiUrl}`);
  }



  getImovel(id: number): Observable<Imovel> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Imovel>(url).pipe(
      tap((_) => console.log(`leu o imovel id=${id}`)),
      catchError(this.handleError<Imovel>(`getimovel id=${id}`))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
