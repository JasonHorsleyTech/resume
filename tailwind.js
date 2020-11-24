const _ = require('lodash')

const {
  colors
} = require('tailwindcss/defaultTheme')

module.exports = {
  important: false,
  theme: {

    extend: {
      colors: {
        'blue-main': '#3498db',


        /* NEW PALETTE */
        'transparent': 'RGBA(0, 0, 0, 0)',
        // Old: transparent-black (rgba(198, 198, 198, 0.5))
        'transparent-50': 'RGBA(0, 0, 0, 0.05)',
        'transparent-100': 'RGBA(0, 0, 0, 0.11)',
        'transparent-200': 'RGBA(0, 0, 0, 0.2)',
        'transparent-300': 'RGBA(0, 0, 0, 0.3)',
        'transparent-400': 'RGBA(0, 0, 0, 0.4)',
        'transparent-500': 'RGBA(0, 0, 0, 0.5)',
        // Old: black-semi-transparent
        'transparent-600': 'RGBA(0, 0, 0, 0.6)',
        'transparent-700': 'RGBA(0, 0, 0, 0.7)',
        // Old: black-transparent
        'transparent-800': 'RGBA(0, 0, 0, 0.86)',
        'transparent-900': 'RGBA(0, 0, 0, 0.9)',
      },

      margin: {
      },

      height: {
        '1/3': '33.333%',
        '2/3': '66.667%',

        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },

    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'group-hover'],
  },

  plugins: [

    /**
     * New transition speed utilities
     * 
     * transition-${speed}
     * speeds: ['fast', 'medium', 'slow']
     */
    function ({ addUtilities }) {

      const transitionUtility = {}
      _.map([
        { prefix: 'fast', speed: '0.2s' },
        { prefix: 'medium', speed: '0.4s' },
        { prefix: 'slow', speed: '6s' },
      ], ({ prefix, speed }) => {
        transitionUtility[`.transition-${prefix}`] = {
          'transition': `${speed}`
        }
      })

      addUtilities(transitionUtility)
    },
  ]
};