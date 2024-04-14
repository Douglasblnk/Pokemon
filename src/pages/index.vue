<script setup lang="ts">
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
