<script setup lang="ts">
import type { PokemonsApi } from '~~/server/types'

defineProps<{
  types: PokemonsApi.PokemonType[]
  disableDense?: boolean
}>()

const $q = useQuasar()

const typeColors: Record<string, string> = {
  grass: 'bg-labels-grass',
  poison: 'bg-labels-poison',
  water: 'bg-labels-water',
  fire: 'bg-labels-fire',
  electric: 'bg-labels-electric',
  ground: 'bg-labels-ground',
  fairy: 'bg-labels-fairy',
  normal: 'bg-labels-normal',
  flying: 'bg-labels-flying',
  default: 'bg-labels-default',
}
</script>

<template>
  <div
    un-flex="~ wrap"
    un-justify-center
    un-mt-md
  >
    <QChip
      v-for="pokemonType in types"
      :key="pokemonType.slot"
      un-color-white
      :dense="!disableDense && $q.screen.name === 'xs'"
      :class="typeColors[pokemonType.type.name] || 'color-labels-default'"
    >
      {{ pokemonType.type.name }}
    </QChip>
  </div>
</template>
