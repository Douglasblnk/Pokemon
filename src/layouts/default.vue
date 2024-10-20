<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div
    un-column
    un-h-screen
  >
    <QSlideTransition>
      <Header v-show="route.name !== 'pokemon-id'" />
    </QSlideTransition>

    <slot />
  </div>
</template>
