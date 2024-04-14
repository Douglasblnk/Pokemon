<script setup lang="ts">
import { getPokemons } from '~/datasource/pokemons'

const search = ref()

const { data } = useInfiniteQuery({
  queryKey: [ 'pokemons' ],
  initialPageParam: 'https://pokeapi.co/api/v2/pokemon',
  queryFn: ({ pageParam }) => getPokemons(pageParam),
  getNextPageParam: value => value.next,
  select: data => data.pages.flatMap(page => page.results),
})
</script>

<template>
  <Header />

  <Page>
    <div
      un-bg-background
      un-w-full
      un-sticky
      un-top-0
    >
      <QInput
        v-model="search"
        label="Pesquise por nome ou código"
        debounce="500"
        outlined
        clearable
        no-error-icon
      >
        <template #prepend>
          <QIcon name="i-mdi-magnify" />
        </template>
      </QInput>
    </div>
  </Page>
</template>
