import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import md5 from 'md5';  

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private apiUrl = 'https://gateway.marvel.com/v1/public/characters';
  private publicKey = '018a97ff9d03e4f1eda0162a1b1a06e6';
  private privateKey = '451e7dfafd7e3b76c2221013a3a66bdf173f361a';

  constructor(private http: HttpClient) {}

  private generateHash(ts: number): string {
    return md5(ts + this.privateKey + this.publicKey);  
  }

  getCharacters(): Observable<any> {
    const ts = Date.now();  
    const hash = this.generateHash(ts);  

    return this.http.get<any>(`${this.apiUrl}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`);
  }

  getCharacterDetails(id: number): Observable<any> {
    const ts = Date.now(); 
    const hash = this.generateHash(ts);  

    return this.http.get<any>(`${this.apiUrl}/${id}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`);
  }
}
