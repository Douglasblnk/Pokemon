<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <div
    id="page-container"
    un-m="sm:lg md"
    un-column
    un-items-center
    un-overflow-auto
    style="height: calc(100vh - 110px);"
  >
    <div
      v-bind="$attrs"
      un-w="sm:col-7 col-12"
    >
      <slot />
    </div>
  </div>
</template>
