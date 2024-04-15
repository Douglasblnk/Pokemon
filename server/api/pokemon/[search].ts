import getPokemon from '../../services/get-pokemon'

export default defineEventHandler(async (event) => {
  const search = getRouterParam(event, 'search')

  try {
    const response = await getPokemon(search)

    return response
  }

  catch (error) {
    return error
  }
})
