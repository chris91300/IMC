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
      colors: {
        denutrition: '#61edf9',
        maigreur: '#62f7b9',
        poidsNormal: '#59f776',
        surpoids: '#bbff00',
        obesite: {
          moderee: '#f7c53d',
          severe: '#ff9900',
          morbide: '#ff2600'
        }
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
