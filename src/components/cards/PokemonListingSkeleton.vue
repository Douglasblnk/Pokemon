<script setup lang="ts">
const pokemonListingSkeletonRef = ref<HTMLDivElement | null>()

const { folderSize } = useListSize(pokemonListingSkeletonRef, 16)
</script>

<template>
  <div
    ref="pokemonListingSkeletonRef"
    un-flex="~ wrap"
    un-gap-md
  >
    <QSkeleton
      v-for="item in 13"
      :key="item"
      un-min-w-153px
      un-min-h-190px
      :style="folderSize"
      un-rounded-lg
    />
  </div>
</template>
