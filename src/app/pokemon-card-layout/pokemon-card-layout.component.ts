import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Subject, takeUntil } from 'rxjs';

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

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokedexEntry(1).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.bulbasaurDescription = this.stripEscapeChars(text);
    });

    this.pokemonService.getPokedexEntry(2).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.ivysaurDescription = this.stripEscapeChars(text);
    });

    this.pokemonService.getPokedexEntry(3).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.venusaurDescription = this.stripEscapeChars(text);
    });

    this.pokemonService.getPokedexEntry(4).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.charmanderDescription = this.stripEscapeChars(text);
    });

    this.pokemonService.getPokedexEntry(5).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.charmeleonDescription = this.stripEscapeChars(text);
    });

    this.pokemonService.getPokedexEntry(6).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.charizardDescription = this.stripEscapeChars(text);
    });

    this.pokemonService.getPokedexEntry(7).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.squirtleDescription = this.stripEscapeChars(text);
    });

    this.pokemonService.getPokedexEntry(8).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.wartortleDescription = this.stripEscapeChars(text);
    });

    this.pokemonService.getPokedexEntry(9).pipe(takeUntil(this.destroy$)).subscribe(text => {
      this.blastoiseDescription = this.stripEscapeChars(text);
    });

  }

  stripEscapeChars(text: string): string {
    //Replace escape characters with a space
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
