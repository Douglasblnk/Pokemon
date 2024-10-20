<script setup lang="ts">
import { getPokemon, getPokemons } from '~/datasource'
import type { PokemonsApi } from '~~/server/types'

const pokemonListingRef = ref<HTMLDivElement | null>()

const { push } = useRouter()

const store = usePokemonStore()

const { folderSize, calcFolderSize } = useListSize(pokemonListingRef, 16)

onMounted(calcFolderSize)

const {
  data,
  isLoading,
  isError,
  fetchNextPage,
  hasNextPage,
  suspense,
} = useInfiniteQuery({
  queryKey: [ 'pokemons-listing' ],
  initialPageParam: 'https://pokeapi.co/api/v2/pokemon?offset=0?limit=24',
  queryFn: ({ pageParam }) => getPokemons(pageParam),
  getNextPageParam: value => value.next,
  select: data => data.pages.flatMap(page => page.results),
  staleTime: Number.POSITIVE_INFINITY,
})

onServerPrefetch(async () => {
  await suspense()
})

const {
  data: searchData,
  isError: searchError,
  isLoading: isSearchLoading,
} = useQuery({
  queryKey: [ 'pokemon-detail', computed(() => store.search?.toLowerCase()) ],
  queryFn: ({ queryKey }) => getPokemon(queryKey[1]),
  enabled: computed(() => !!store.search),
  staleTime: Number.POSITIVE_INFINITY,
})

const loading = computed(() => {
  return isLoading.value || isSearchLoading.value
})

async function onLoad(_: number, done: (_stop?: boolean | undefined) => void) {
  await fetchNextPage()

  done(!hasNextPage.value)
}

function openDetails(pokemon: PokemonsApi.PokemonDetail) {
  store.$patch(pokemon)

  push(`pokemon/${pokemon.id}`)
}
</script>

<template>
  <Page un-space-y-md>
    <div
      un-font-semibold
      un-text-lg
    >
      Pokémons
    </div>

    <div
      v-if="isError || searchError"
      un-flex
      un-items-center
      un-justify-center
      un-text="lg center gray-500"
      un-font-bold
      un-h-full
    >
      {{ searchError ? 'Pokémon não encontrado' : 'Não foi possível buscar pelos Pokémons' }}
    </div>

    <PokemonListingSkeleton v-else-if="loading" />

    <div
      v-else
      ref="pokemonListingRef"
    >
      <PokemonListingCard
        v-if="searchData"
        v-bind="searchData"
        un-min-w-153px
        un-min-h-190px
        :style="folderSize"
        un-mb="none sm:md"
        @click="openDetails(searchData!)"
      />

      <QInfiniteScroll
        v-else-if="data?.length"
        :offset="150"
        scroll-target="#page-container"
        @load="onLoad"
      >
        <template #loading>
          <div
            un-mt-xl
            un-flex
            un-justify-center
          >
            <QSpinnerDots
              color="primary"
              size="40px"
            />
          </div>
        </template>

        <div
          un-flex="~ wrap"
          un-gap-md
        >
          <QIntersection
            v-for="pokemon in data"
            :key="pokemon.id"
            transition="scale"
            once
            un-min-w-153px
            un-min-h-220px
            :style="folderSize"
          >
            <PokemonListingCard
              v-bind="pokemon"
              un-min-w-153px
              un-min-h-220px
              :style="folderSize"
              un-mb="none sm:md"
              @click="openDetails(pokemon)"
            />
          </QIntersection>
        </div>
      </QInfiniteScroll>
    </div>
  </Page>
</template>
