// tailwindConfig.ts
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1000px',
      },
    },
    extend: {
      fontFamily: {
        noto: ['"Noto Sans JP"', 'sans-serif'],
        modak: ['Modak', 'cursive'],
        fugaz: ['"Fugaz One"', 'cursive'],
      },
    },
  },
  plugins: [],
};