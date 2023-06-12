/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
        center: true,
        padding: "1rem"
    },
    extend: {
      colors: {
        "whiteColor": "white",
        "tangerineYellow": "#FFCC00",
        "deepRed": "#8E0D3C",
        "lightBlue": "#ADD8E6",
        "backdrop": "rgba(0, 0, 0, 0.85)",
        "bodyBlue": "#F0F8FF",
        "lightGray": "hsl(233, 8%, 62%)"
      },
    },
    screens: {
      "sm": {"min": "320px", "max": "639px"},
      "md": {"min": "640px", "max": "968px"},
      "lg": {"max": "1124px"},
      "xl": {"max": "1124px"},
      "2xl": {"max": "1124px"},
    },
  },
  plugins: [],
}
