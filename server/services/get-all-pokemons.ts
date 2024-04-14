import mapPokemonDetails from '../mappers'
import type { PokemonsApi } from '../types'

async function getDetails(pokemons: PokemonsApi.PokemonsListing['results']) {
  const promises = pokemons.map((pokemon) => {
    return $fetch<PokemonsApi.PokemonDetail>(pokemon.url)
  })

  return Promise.all(promises)
}

export default async function getAllPokemons(nextPage: string | undefined): Promise<PokemonsApi.PokemonsResponse> {
  const page = nextPage || 'https://pokeapi.co/api/v2/pokemon'

  const pokemons = await $fetch<PokemonsApi.PokemonsListing>(
    page,
    {
      params: { limit: 24 },
    },
  )

  const detailedPokemons = await getDetails(pokemons.results)

  return {
    ...pokemons,
    results: detailedPokemons.map(mapPokemonDetails),
  }
}
