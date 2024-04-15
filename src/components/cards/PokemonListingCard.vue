<script setup lang="ts">
import type { PokemonsApi } from '~~/server/types'

defineProps<PokemonsApi.PokemonDetail>()

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
  <QCard
    v-ripple
    un-rounded-lg
    un-cursor-pointer
    un-transition-all
    un-shadow="[0_4px_20px_0_rgba(225,225,225)]"
    un-hover="transform-translate-y--2"
  >
    <QCardSection
      un-column
      un-items-center
      un-h-full
    >
      <QImg
        width="50px"
        height="50px"
        :src="sprites.other.home.front_default"
      />

      <div
        un-text="center lg"
        un-my-md
        un-font-semibold
      >
        {{ name }}
      </div>

      <div
        un-text="center xs"
        un-font-semibold
      >
        Cod: {{ id }}
      </div>

      <QSpace />

      <div
        un-flex="~ wrap"
        un-justify-center
        un-mt-md
      >
        <QChip
          v-for="pokemonType in types"
          :key="pokemonType.slot"
          un-color-white
          :dense="$q.screen.name === 'xs'"
          :class="typeColors[pokemonType.type.name] || 'color-labels-default'"
        >
          {{ pokemonType.type.name }}
        </QChip>
      </div>
    </QCardSection>
  </QCard>
</template>
