const sizesEnum = {
  xs: 2,
  sm: 2,
  md: 4,
  lg: 5,
  xl: 5,
}

export default (foldersWrapper: Ref<HTMLDivElement | null | undefined>, spaceBetween: number) => {
  const folderSize = reactive({
    width: '',
    height: '',
  })

  const $q = useQuasar()

  function calcFolderSize() {
    const folderQtd = sizesEnum[$q.screen.name]

    if (foldersWrapper.value?.clientWidth) {
      const width = (foldersWrapper.value?.clientWidth / folderQtd) - (spaceBetween || 0)

      const height = (
        (foldersWrapper.value?.clientWidth / folderQtd)
        * ($q.screen.name === 'xs' ? 1.5 : 1.2)
      ) - (spaceBetween || 0)

      folderSize.width = `${width}px`
      folderSize.height = `${height}px`
    }
  }

  watch(
    () => [ $q.screen.width, foldersWrapper.value ],
    calcFolderSize,
  )

  return {
    folderSize,
  }
}
