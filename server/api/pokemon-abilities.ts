import getPokemonAbilities from '../services/get-pokemon-abilities'

export default defineEventHandler(async (event) => {
  const { urls } = getQuery<{ urls: string[] }>(event)

  try {
    const response = await getPokemonAbilities(Array.isArray(urls) ? urls : [ urls ])

    return response
  }

  catch (error) {
    throw createError({
      statusCode: 400,
      data: error,
    })
  }
})
