import type { PokemonsApi } from '~~/server/types'

export async function getPokemons(next: string) {
  const data = await $fetch<PokemonsApi.PokemonsResponse>(
    '/api/pokemons',
    {
      params: { next },
    })

  return data
}

export async function getPokemon(search: string | undefined) {
  const data = await $fetch<PokemonsApi.PokemonDetail>(`/api/pokemon/${search}`)

  return data
}
