export namespace PokemonsApi {
  export interface PokemonsListing extends Pagination {
    results: SimpleResource[]
  }

  export interface PokemonsResponse extends Pagination {
    results: PokemonDetail[]
  }

  export interface PokemonDetail {
    id: number
    name: string
    abilities: PokemonAbility[]
    sprites: PokemonSprites
    types: PokemonType[]
  }

  interface PokemonAbility {
    ability: SimpleResource
  }

  interface SimpleResource {
    name: string
    url: string
  }

  interface Pagination {
    count: number
    next: string | null
    previous: string | null
  }

  interface PokemonSprites {
    front_default: string | null
    front_shiny: string | null
    other: PokemonSpriteOther
  }

  interface PokemonSpriteOther {
    home: {
      front_default: string | null
      front_shiny: string | null
    }
  }

  interface PokemonType {
    slot: number
    type: {
      name: string
      url: string
    }
  }
}
