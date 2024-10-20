<script setup lang="ts">
const store = usePokemonStore()
</script>

<template>
  <QCard
    un-rounded-none
    un-shadow
    un-bg-transparent
  >
    <QCardSection
      un-flex
      un-justify-center
      un-items-center
      un-gap-sm
    >
      <QInput
        v-model="store.search"
        label="Pesquise por nome ou código"
        debounce="500"
        un-w="sm:100 full"
        outlined
        clearable
        no-error-icon
        hide-bottom-space
      >
        <template #prepend>
          <QIcon name="i-mdi-magnify" />
        </template>
      </QInput>
    </QCardSection>
  </QCard>
</template>
