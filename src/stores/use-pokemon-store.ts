import type { PokemonsApi } from '~~/server/types'

export const usePokemonStore = defineStore('pokemon-store', {
  state: (): Partial<PokemonsApi.PokemonDetail & { search: string }> => ({
    id: undefined,
    name: undefined,
    sprites: undefined,
    types: undefined,
    abilities: undefined,
    search: '',
  }),
})
