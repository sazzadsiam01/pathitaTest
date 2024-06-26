/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FFC017',
        gray: '#424B54',
      },
      fontFamily: {
        primary: ['Inter'],
        body: ["Noto Sans Bengali"],
      }
    },
  },
  plugins: [],
};
