import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];
  searchTerm: string = '';
  noResultsFound: boolean = false;
  favoritePokemonList: any[] = [];
  showFavoritesOnly = false;

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
              this.filteredPokemonList = this.pokemonList;
            });
        });
      });
  }

  onSearch() {
    this.filteredPokemonList = this.pokemonList.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    this.noResultsFound = this.filteredPokemonList.length === 0; // set noResultsFound to true if no pokemon matches the search term
  }

  addToFavorites(pokemon: any) {
    if (!this.favoritePokemonList.includes(pokemon)) {
      this.favoritePokemonList.push(pokemon);
    }
  }

  removeFromFavorites(pokemon: any) {
    const index = this.favoritePokemonList.indexOf(pokemon);
    if (index >= 0) {
      this.favoritePokemonList.splice(index, 1);
    }
  }

  isFavorite(pokemon: any) {
    return this.favoritePokemonList.includes(pokemon);
  }
  toggleFavorites() {
    this.showFavoritesOnly = !this.showFavoritesOnly;
    this.filteredPokemonList = this.showFavoritesOnly
      ? this.favoritePokemonList
      : this.pokemonList;
  }
}
