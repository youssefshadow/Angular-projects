import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList() {
    return this.http.get(`${this.baseUrl}/pokemon?limit=151`);
  }

  getPokemonDetails(id: number) {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }
}
