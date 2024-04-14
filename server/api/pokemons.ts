import getAllPokemons from '../services/get-all-pokemons'

export default defineEventHandler(async (event) => {
  const nextPage = event.context.params?.next

  try {
    const response = await getAllPokemons(nextPage)

    return response
  }

  catch (error) {
    return error
  }
})
