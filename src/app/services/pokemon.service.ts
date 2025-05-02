import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  private http = inject(HttpClient);
  pokeApiBaseUrl: string = 'https://pokeapi.co/api/v2/'; //Base URL for the Pokémon API

  getPokedexEntry(pokemonId: number): Observable<string> {
    const pokedexEntryUrl = `${this.pokeApiBaseUrl}pokemon-species/${pokemonId}/`;

    return this.http.get<any>(pokedexEntryUrl).pipe(
      map(data => {
        const entry = data.flavor_text_entries.find((e: any) => e.language.name === 'en');
        return entry?.flavor_text ?? 'No description available.';
      })
    );
  }
}
