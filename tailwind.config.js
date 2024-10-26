/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey": "#6d6e71"
      },
      backgroundImage: {
        "Rectangle": "url('./src/assets/Rectangle.png')",
        "YoutubeVideo": "url('./src/assets/YoutubeVideo.jpeg')",
      }
    },
  },
  plugins: [],
};
