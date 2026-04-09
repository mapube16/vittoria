/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Kinetic Precision palette
        surface: "#131313",
        "surface-container-low": "#1B1B1B",
        "surface-container": "#1F1F1F",
        "surface-container-high": "#2A2A2A",
        "surface-container-highest": "#353535",
        "surface-bright": "#393939",
        "on-surface": "#E2E2E2",
        "brand-red": "#CC0000",
        "brand-red-bright": "#FF0000",
        "outline-variant": "#5E3F3A",
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        technical: "0.01em",
        label: "0.05em",
        caps: "0.2em",
      },
      boxShadow: {
        "ambient-red": "0 0 40px 0 rgba(204, 0, 0, 0.08)",
        "glow-red": "0 0 24px 0 rgba(255, 0, 0, 0.4)",
        "card-red": "0 0 12px 0 rgba(204, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
