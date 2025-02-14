/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'hero-pattern': "url('/banner3.svg')",
        'banner':"url('/newSlew.svg')",
        'custom-gradient': 'linear-gradient(90deg, #6F5CF3, #4C3CB0, #6F5CF3)',
        'banner-new':"url('/newslate.svg')",
      },
      animation: {
        'scroll-gradient': 'move-gradient 6s linear infinite',
      },
      keyframes: {
        'move-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
    
  ],
};
