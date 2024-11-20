import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from '../../Wish';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private apiUrl = 'http://localhost:3000/wishs';

  constructor(private http: HttpClient) {}

  getWishs(): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(this.apiUrl);
  }
}
