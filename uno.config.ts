import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const spacing = {
  DEFAULT: '4px',
  px: '1px',
  0: '0px',
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '48px',
  xxl: '64px',
}

const baseSize = {
  'col-1': '8.333333333333334%',
  'col-2': '16.666666666666668%',
  'col-3': '25%',
  'col-4': '33.33333333333333%',
  'col-5': '41.66666666666667%',
  'col-6': '50%',
  'col-7': '58.333333333333336%',
  'col-8': '66.66666666666667%',
  'col-9': '75%',
  'col-10': '83.33333333333334%',
  'col-11': '91.66666666666667%',
  'col-12': '100%',
  'prose': '65ch',
}

export default defineConfig({
  shortcuts: [
    { column: 'flex flex-nowrap flex-col h-auto min-h-0 max-h-full' },
  ],

  theme: {
    breakpoints: {
      sm: '600px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
      xxl: '2560px',
    },

    colors: {
      background: '#F1F4F5',
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

      gray: {
        text: '#C1BEBE',
        200: '#e3e5e6',
        500: '#9c9ca4',
        600: '#616161',
      },

      primary: {
        DEFAULT: '#30455C',
        light: '#30455c1a',
      },

      secondary: '#00A3FF',

      labels: {
        grass: '#08FEC3',
        poison: '#AF08FE',
        water: '#00A3FF',
        fire: '#FE0808',
        electric: '#FFB800',
        ground: '#85826E',
        fairy: '#FBA1EC',
        normal: '#C4C4C4',
        flying: '#5317FC',
        default: '#0E0E0E',
      },
    },

    spacing: {
      ...spacing,
    },

    width: {
      ...spacing,
      ...baseSize,
    },

    height: {
      ...spacing,
      ...baseSize,
    },
  },
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        color: '',
      },
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        mulish: [
          {
            name: 'Mulish',
            weights: [ '400', '500', '600', '700', '800', '900' ],
            italic: true,
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  preflights: [
    {
      getCSS: ({ theme }: any) => `
        :root {
          --color-primary: ${theme.colors.primary};
          --color-background: ${theme.colors.background};
          --color-black: ${theme.colors.black};
          --color-white: ${theme.colors.white};
          --color-gray-text: ${theme.colors.gray.text};
          --color-gray: ${theme.colors.gray['600']};
          --color-primary: ${theme.colors.primary.DEFAULT};
          --color-primary-light: ${theme.colors.primary.light};
          --color-secondary: ${theme.colors.secondary};
        }
      `,
    },
  ],
})
