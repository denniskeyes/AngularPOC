import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Subject, forkJoin, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pokemon-card-layout',
  standalone: false,
  templateUrl: './pokemon-card-layout.component.html',
  styleUrl: './pokemon-card-layout.component.scss'
})
export class PokemonCardLayoutComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  bulbasaurDescription: string = '';
  ivysaurDescription: string = '';
  venusaurDescription: string = '';

  charmanderDescription: string = '';
  charmeleonDescription: string = '';
  charizardDescription: string = '';

  squirtleDescription: string = '';
  wartortleDescription: string = '';
  blastoiseDescription: string = '';

  // Todo: Make requests for N number of Pokemon
  pokemonMap = [
    { id: 1, key: 'bulbasaurDescription' },
    { id: 2, key: 'ivysaurDescription' },
    { id: 3, key: 'venusaurDescription' },
    { id: 4, key: 'charmanderDescription' },
    { id: 5, key: 'charmeleonDescription' },
    { id: 6, key: 'charizardDescription' },
    { id: 7, key: 'squirtleDescription' },
    { id: 8, key: 'wartortleDescription' },
    { id: 9, key: 'blastoiseDescription' },
  ];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    let numToFetch = 10;

    const requests = this.pokemonMap.map(p =>
      this.pokemonService.getPokedexEntry(p.id)
    );

    // Combine requests. Will wait until all requests are completed
    forkJoin(requests)
      .pipe(takeUntil(this.destroy$))
      .subscribe(responses => {
        responses.forEach((text, i) => {
          const key = this.pokemonMap[i].key;
          (this as any)[key] = this.stripEscapeChars(text);
        });
      });

  }

  stripEscapeChars(text: string): string {
    // Replace escape characters with a space
    return text
      .replace(/\\[nft]/g, ' ') //Replace escape sequences: \n, \f, \t
      .replace(/[\n\f\t\r\u000c]/g, ' '); //Replace actual characters
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

    console.log("Pokemon subscriptions have been unsubscribed.");
  }
}
