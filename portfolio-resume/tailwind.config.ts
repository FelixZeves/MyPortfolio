import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],

  corePlugins: {
    preflight: true,
  },

  theme: {
    extend: {
      colors:{
        'paper': 'var(--paper)',
        'paper-dark': 'var(--paper-dark)',

        'industrial-black': 'var(--industrial-black)',
        'industrial-navy': 'var(--industrial-navy)',

        'signal-primary': 'var(--signal-primary)',
        'signal-secondary': 'var(--signal-secondary)',
        'signal-additional': 'var(--signal-additional)',
        
        'technical-grid': 'var(--technical-grid)',
        'technical-code': 'var(--technical-code)',
        'technical-line': 'var(--technical-line)',
      },
      
      fontFamily: {
        body: ['"IBM Plex Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },

  plugins: [],
}

export default config