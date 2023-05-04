import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = [];

  constructor() {}

  ngOnInit() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        this.pokemonList = data.results;
        this.pokemonList.forEach((pokemon, index) => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
            .then((response) => response.json())
            .then((details) => {
              this.pokemonList[index].details = details;
            });
        });
      });
  }
}
