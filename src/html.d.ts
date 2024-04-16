import type { AttributifyNames } from '@unocss/preset-attributify'
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}

declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [key: string]: any
  }
}
declare module '@vue/runtime-core' {
  interface AllowedComponentProps {
    [key: string]: any
  }
}

type Prefix = 'un-'

interface HTMLAttributes extends Partial<Record<AttributifyNames<Prefix>, string>> {}

export {}
