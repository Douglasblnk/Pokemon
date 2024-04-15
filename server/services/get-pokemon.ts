import { mapPokemonDetails } from '../mappers'
import type { PokemonsApi } from '../types'

export default async function getPokemon(search: string | undefined): Promise<PokemonsApi.PokemonDetail> {
  const pokemon = await $fetch<PokemonsApi.PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${search}`)

  return mapPokemonDetails(pokemon)
}
