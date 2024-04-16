export namespace PokemonsApi {
  export interface PokemonsListing extends Pagination {
    results: SimpleResource[]
  }

  export interface PokemonsResponse extends Pagination {
    results: PokemonDetail[]
  }

  export interface PokemonAbilitiesResponse {
    id: number
    name: string
    effect: string
  }

  export interface PokemonAbilities {
    id: number
    name: string
    effect_entries: {
      effect: string
      short_effect: string
      language: {
        name: string
        url: string
      }
    }[]
  }

  export interface PokemonDetail {
    id: number
    name: string
    abilities: PokemonAbility[]
    sprites: PokemonSprites
    types: PokemonType[]
  }

  export interface PokemonAbility {
    ability: SimpleResource
  }

  export interface SimpleResource {
    name: string
    url: string
  }

  export interface Pagination {
    count: number
    next: string | null
    previous: string | null
  }

  export interface PokemonSprites {
    front_default: string | null
    front_shiny: string | null
    other: PokemonSpriteOther
  }

  export interface PokemonSpriteOther {
    home: {
      front_default: string | null
      front_shiny: string | null
    }
  }

  export interface PokemonType {
    slot: number
    type: {
      name: string
      url: string
    }
  }
}
