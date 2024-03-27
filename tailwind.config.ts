import type { Config } from 'tailwindcss'
import {
  slateDark,
} from '@radix-ui/colors';

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        ...slateDark,
      },
      fontFamily: {
        'body': ['Poppins Regular', 'system-ui']
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1280px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1600px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],

} satisfies Config

