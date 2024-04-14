export default defineNuxtPlugin(() => {
  const $q = useQuasar()

  $q.iconMapFn = (iconName) => {
    return (iconName.startsWith('i-') ? { cls: iconName } : undefined)
  }
})
