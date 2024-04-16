<script setup lang="ts">
import type { PokemonsApi } from '~~/server/types'

defineProps<PokemonsApi.PokemonDetail>()
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
        {{ capitalize(name) }}
      </div>

      <div
        un-text="center xs"
        un-font-semibold
      >
        Cod: {{ id }}
      </div>

      <QSpace />

      <PokemonType :types="types" />
    </QCardSection>
  </QCard>
</template>
