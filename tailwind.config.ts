import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '999': '999',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 10s linear infinite',
      },
       screen:{
      'xs':'320px',
      // // => @media (min-width: 320px) {max-width:639px }

      'sm': '640px',
      // // => @media (min-width: 640px) {max-width:767px }

      'md': '768px',
      // // => @media (min-width: 768px) {max-width:1023px }

      'lg': '1024px',
      // // => @media (min-width: 1024px) {max-width:1279px }

      'xl': '1280px',
      // // => @media (min-width: 1280px) {max-width:1535px }

      '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
       },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        integral: ['Integral CF', 'sans-serif'], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
