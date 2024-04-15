import { mapPokemonAbilities } from '../mappers'
import type { PokemonsApi } from '../types'

export default async function getPokemonAbilities(urls: string[]) {
  const promises = urls.map((url) => {
    return $fetch<PokemonsApi.PokemonAbilities>(url)
  })

  const abilities = await Promise.all(promises)

  return abilities.map(mapPokemonAbilities)
}
