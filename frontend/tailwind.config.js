// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//         colors : {
//             background: '#F8FAFC',
//             foreground: '#1E293B',
//             primary: '#1E293B',
//             secondary: '#E0E7FF',
//             secondary200: '#CBD5E1',
//             secondary300: '#D1D5DB',
//             secondary400: '#FBCFE8',
//             secondary500: '#6B7280',
//             secondary600: '#4B5563',

//         }

//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'color-background': 'var(--color-background)',
        'color-foreground': 'var(--color-foreground)',
         primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
