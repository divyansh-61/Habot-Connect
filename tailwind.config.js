/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey": "#6d6e71"
      },
      backgroundImage: {
        "Rectangle": "url('/Rectangle.png')",
        "YoutubeVideo": "url('/YoutubeVideo.jpeg')",
      }
    },
  },
  plugins: [],
};
