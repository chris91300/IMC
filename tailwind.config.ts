import type { Config } from 'tailwindcss'

/**
 * dénutrition couleur #61edf9 bleu turquoise
 * maigreur couleur #62f7b9 bleu vert
 * poids normal couleur #59f776 vert
 * surpoids couleur #bbff00 vert orange
 * obésité modérée couleur #f7c53d orange claire
 * obésité sévère couleur #ff9900 orange
 * obésité morbide couleur #ff2600 rouge
 */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {// les couleurs sont ok pour bg white and black
        //            bg blanc    bg noir     nom couleur si blanc
        denutrition: '#0797B9',//'#61edf9', new -> cyan
        maigreur: '#0D9B8A',//'#62f7b9', new -> teal
        poidsNormal: '#2B9A66',//'#59f776', new -> green
        surpoids: '#EF5F00',//'#bbff00', -> orange
        obesite: {
          moderee: '#CF3897',//'#f7c53d', new -> pink
          severe: '#DC3B5D',//'#ff9900', new -> ruby
          morbide: '#FF0000',//'#ff2600' new -> red11
        },
        wheat: 'wheat'
      },
      boxShadow: {
        'full': '0px 0px 2em'
      },
      keyframes: ({ theme }) => ({
        hide: {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'}
        },
        denutritionToMaigreur: {
          '0%': {
            color: theme('colors.denutrition'),
            borderColor: theme('colors.denutrition'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.denutrition')}`
          },
          '100%': {
            color: theme('colors.maigreur'),
            borderColor: theme('colors.maigreur'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.maigreur')}`
          }
        },
        maigreurToPoidsNormal: {
          '0%': {
            color: theme('colors.maigreur'),
            borderColor: theme('colors.maigreur'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.maigreur')}`
          },
          '100%': {
            color: theme('colors.poidsNormal'),
            borderColor: theme('colors.poidsNormal'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.poidsNormal')}`
          }
        },
        poidsNormalToSurpoids: {
          '0%': {
            color: theme('colors.poidsNormal'),
            borderColor: theme('colors.poidsNormal'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.poidsNormal')}`
          },
          '100%': {
            color: theme('colors.surpoids'),
            borderColor: theme('colors.surpoids'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.surpoids')}`
          }
        },
        surpoidsToObesiteModeree: {
          '0%': {
            color: theme('colors.surpoids'),
            borderColor: theme('colors.surpoids'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.surpoids')}`
          },
          '100%': {
            color: theme('colors.obesite.moderee'),
            borderColor: theme('colors.obesite.moderee'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.obesite.moderee')}`
          }
        },
        obesiteModereeToObesiteSevere: {
          '0%': {
            color: theme('colors.obesite.moderee'),
            borderColor: theme('colors.obesite.moderee'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.obesite.moderee')}`
          },
          '100%': {
            color: theme('colors.obesite.severe'),
            borderColor: theme('colors.obesite.severe'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.obesite.severe')}`
          }
        },
        obesiteSevereToObesiteMorbide: {
          '0%': {
            color: theme('colors.obesite.severe'),
            borderColor: theme('colors.obesite.severe'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.obesite.severe')}`
          },
          '100%': {
            color: theme('colors.obesite.morbide'),
            borderColor: theme('colors.obesite.morbide'),
            boxShadow: `${theme('boxShadow.full')} ${theme('colors.obesite.morbide')}`
          }
        }
      }),
      animation: {
        hide: 'hide 1s linear forwards',
        denutritionToMaigreur: 'denutritionToMaigreur 1s linear forwards',
        maigreurToPoidsNormal: 'maigreurToPoidsNormal 1s linear forwards',
        poidsNormalToSurpoids: 'poidsNormalToSurpoids 1s linear forwards',
        surpoidsToObesiteModeree: 'surpoidsToObesiteModeree 1s linear forwards',
        obesiteModereeToObesiteSevere: 'obesiteModereeToObesiteSevere 1s linear forwards',
        obesiteSevereToObesiteMorbide: 'obesiteSevereToObesiteMorbide 1s linear forwards',
      }
    },
  },
  plugins: [],
}
export default config
