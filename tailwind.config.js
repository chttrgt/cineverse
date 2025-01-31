/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },

    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "serif"],
        open: ["Open Sans", "serif"],
      },
      colors: {
        "cineverse-black": "#111",
        "cineverse-pencil-black": "#27272C",
        "cineverse-red": "#BC1A45",
        "cineverse-melon": "#FFD369",
        "cineverse-dark-melon": "#cfab55",
        "cineverse-grey": "#DDDDDD",
        "cineverse-white": "#F7F7F7",
        "cineverse-light-blue": "#45aaf2",
        "cineverse-dark-blue": "#2e9add",
        "cineverse-green": "#1abc9c",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow:
            "0 0 5px rgb(69, 170, 242), 0 0 10px rgb(69, 170, 242), 0 0 15px rgb(69, 170, 242)",
        },
        ".group-hover\\:text-shadow:hover": {
          textShadow:
            "0 0 5px rgb(69, 170, 242), 0 0 10px rgb(69, 170, 242), 0 0 15px rgb(69, 170, 242)",
        },
      });
    },
  ],
};
