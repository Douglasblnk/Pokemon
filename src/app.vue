<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="sass">
.page-enter-active,
.page-leave-active
  transition: all 0.4s

.page-enter-from,
.page-leave-to
  opacity: 0
  filter: blur(4px)
  transform: scale(.95) translateY(-50px)

.scale-enter-active,
.scale-leave-active
  transition: all 0.4s

.scale-enter-from,
.scale-leave-to
  opacity: 0
  filter: blur(4px)
  transform: scale(1.05) translateY(50px)
</style>
