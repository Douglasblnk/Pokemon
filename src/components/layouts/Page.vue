<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <div
    id="page-container"
    un-m="sm:lg md"
    un-column
    un-grow
    un-h-full
    un-items-center
    un-overflow-auto
  >
    <div
      un-w="sm:col-7 col-12"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>
