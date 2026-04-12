/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componente/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        organic: {
          green: '#8FAE7A',      // Verde Principal (Manual pág. 4)
          darkGreen: '#5F6F52',  // Verde Escuro (Manual pág. 4)
          offWhite: '#F4F2EC',   // Off-white (Manual pág. 4)
          earth: '#7A5C3E',      // Marrom Terra (Manual pág. 4)
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Tipografia pág. 5
        display: ['Black Mango', 'serif'], // Tipografia pág. 5
      },
    },
  },
  plugins: [],
};