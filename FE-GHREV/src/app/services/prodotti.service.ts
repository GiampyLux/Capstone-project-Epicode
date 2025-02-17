import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  // prodotti.service.ts
  getProdottoById(id: number): Observable<Prodotto> {
  return this.http.get<Prodotto>(`${this.apiUrl}/${id}`);
}

  private apiUrl = 'https://localhost:7133/api/Prodotti';

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.apiUrl);
  }
  getProdottiByName(search: string): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(`${this.apiUrl}/search?name=${search}`); // Chiamata all'API con query
  }
}

