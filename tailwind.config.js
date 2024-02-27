/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: 'hsl(234, 9%, 12%)',
        grey: 'hsl(214, 20%, 96%)',
        darkGrey: 'hsl(214, 7%, 32%)',
        white: 'hsl(0, 0%, 100%)',
        red: 'hsl(352, 68%, 57%)',
      },
      fontFamily: {
        Spartan: ["League spartan", "sans-serif"],
      },
     
      fontSize: {
        h2: "64px",
        h5: "24px",
        h6: "16px",
      },
    },
    screens: {
      xx: "280px",
      xs: "375px",
      ss: "620px",
      sm: "768px",
      md: "1200px",
      lg: "1300px",
      regular: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};
