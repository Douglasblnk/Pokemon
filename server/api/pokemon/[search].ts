import getPokemon from '../../services/get-pokemon'

export default defineEventHandler(async (event) => {
  const search = getRouterParam(event, 'search')

  try {
    const response = await getPokemon(search)

    return response
  }

  catch (error) {
    throw createError({
      statusCode: 400,
    })
  }
})
