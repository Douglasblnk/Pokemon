export function capitalize(text: string) {
  const firstLetterRE = /(?:^|\s|["'([{])+\S/g

  return text
    .split(' ')
    .map((word, index) => {
      const lowerCaseWord = word.toLocaleLowerCase()

      return (index > 0)
        ? lowerCaseWord
        : word.toLowerCase().replace(firstLetterRE, (firstLetter) => {
          return firstLetter.toUpperCase()
        })
    })
    .join(' ')
}
