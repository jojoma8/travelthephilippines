module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        10: "10",
        15: "15",
        20: "20",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
