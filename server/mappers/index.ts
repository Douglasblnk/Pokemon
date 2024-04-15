import type { PokemonsApi } from '../types'

export default function mapPokemonDetails(pokemon: PokemonsApi.PokemonDetail): PokemonsApi.PokemonDetail {
  return {
    id: pokemon.id,
    name: pokemon.name,
    sprites: {
      front_default: pokemon.sprites.front_default,
      front_shiny: pokemon.sprites.front_shiny,
      other: {
        home: {
          front_default: pokemon.sprites.other.home.front_default,
          front_shiny: pokemon.sprites.other.home.front_shiny,
        },
      },
    },
    types: pokemon.types,
    abilities: pokemon.abilities,
  }
}
