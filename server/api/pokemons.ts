import getAllPokemons from '../services/get-all-pokemons'

export default defineEventHandler(async (event) => {
  const params = getQuery<{ next: string }>(event)

  try {
    const response = await getAllPokemons(params.next)

    return response
  }

  catch (error) {
    throw createError({
      statusCode: 400,
    })
  }
})
