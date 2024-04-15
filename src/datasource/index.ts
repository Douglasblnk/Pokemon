export async function getPokemons(next: string) {
  const data = await $fetch('/api/pokemons', {
    params: { next },
  })

  return data
}

export async function getPokemon(search: string | undefined) {
  const data = await $fetch(`/api/pokemon/${search}`)

  return data
}

export async function getPokemonAbilities(urls: string[] | undefined) {
  const data = await $fetch('/api/pokemon-abilities', {
    params: {
      urls,
    },
  })

  return data
}
