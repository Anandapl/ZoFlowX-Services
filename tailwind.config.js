/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE5",
        "cream-2": "#EBE4D6",
        ink: "#0E0E12",
        ink2: "#1A1A20",
        paper: "#FBF8F2",
        lime: "#D9F75C",
        coral: "#E85D2F",
        gold: "#F0C24B",
        muted: "#6B6258",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0px rgba(239,68,68,0.6)" },
          "60%": { boxShadow: "0 0 0 6px rgba(239,68,68,0)" },
          "100%": { boxShadow: "0 0 0 0px rgba(239,68,68,0)" },
        },
        rise: {
          from: { height: "0", opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
