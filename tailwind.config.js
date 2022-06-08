module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    color: {
      "primary-color": "#155263",
      "secondary-color": "#ff6f3c",
    },
  },
  plugins: [require("flowbite/plugin")],
};
