/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      geist: ["Geist", "sans-serif"],
      geistMono: ["GeistMono", "sans-serif"],
    },
  },
  extend: {
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
    colors: {
      primary: "#ffffff",
      secondary: "#fafafa",
      gray: {
        100: "#f2f2f2",
        200: "#ebebeb",
        300: "#e1e1e1",
        400: "#ebebeb",
        500: "#c9c9c9",
        600: "#a8a8a8",
        700: "#8f8f8f",
        800: "#7d7d7d",
        900: "#666666",
        1000: "#171717",
      },
      "gray-alpha": {
        100: "#ededed",
        200: "#e6e6e6",
        300: "#e1e1e1",
        400: "#e6e6e6",
        500: "#c5c5c5",
        600: "#a5a5a5",
        700: "#8d8d8d",
        800: "#7a7a7a",
        900: "#616161",
        1000: "#161616",
      },
      blue: {
        100: "#f0f7ff",
        200: "#ebf5ff",
        300: "#e0f0ff",
        400: "#cce6ff",
        500: "#99ceff",
        600: "#52aeff",
        700: "#0072f5",
        800: "#0062d1",
        900: "#0068d6",
        1000: "#00254d",
      },
      red: {
        100: "#fff0f0",
        200: "#ffebeb",
        300: "#ffe6e6",
        400: "#fdd8d8",
        500: "#f8b9b9",
        600: "#f87275",
        700: "#e5484d",
        800: "#da2f35",
        900: "#cb2a2f",
        1000: "#391417",
      },
      amber: {
        100: "#fff6e6",
        200: "#fff4d6",
        300: "#fef0cd",
        400: "#ffdd8f",
        500: "#ffc96b",
        600: "#f5b047",
        700: "#ffb224",
        800: "#ff990a",
        900: "#a35200",
        1000: "#4e2009",
      },
      green: {
        100: "#effbef",
        200: "#ebfaeb",
        300: "#daf6da",
        400: "#c6f1c7",
        500: "#99e69e",
        600: "#6cda75",
        700: "#45a557",
        800: "#398e4a",
        900: "#297a3a",
        1000: "#1b311e",
      },
      teal: {
        100: "#eefcf9",
        200: "#e5faf6",
        300: "#d4f7f0",
        400: "#bef4eb",
        500: "#86ead9",
        600: "#45dec5",
        700: "#12a594",
        800: "#0d8c7d",
        900: "#067a6e",
        1000: "#073c34",
      },
      purple: {
        100: "#f9f0ff",
        200: "#f9f1fe",
        300: "#f4e8fc",
        400: "#eddcf9",
        500: "#d5b1f1",
        600: "#bf89ec",
        700: "#8e4ec6",
        800: "#763da9",
        900: "#7820bc",
        1000: "#2e004d",
      },
      pink: {
        100: "#ffebf5",
        200: "#feecf2",
        300: "#fce3ec",
        400: "#f9d7e2",
        500: "#f5b8cc",
        600: "#ee87a7",
        700: "#ea3e83",
        800: "#df2670",
        900: "#bd2864",
        1000: "#430a23",
      },
      // Dark mode
      primarydark: "var('--bg-dark-primary')",
      secondarydark: "var('--bg-dark-secondary')",
      "gray-dark": {
        100: "#1a1a1a",
        200: "#1f1f1f",
        300: "#292929",
        400: "#2e2e2e",
        500: "#454545",
        600: "#828282",
        700: "#8f8f8f",
        800: "#7d7d7d",
        900: "#a1a1a1",
        1000: "#ededed",
      },
      "gray-alpha-dark": {
        100: "#0f0f0f",
        200: "#171717",
        300: "#212121",
        400: "#242424",
        500: "#3d3d3d",
        600: "#828282",
        700: "#8a8a8a",
        800: "#787878",
        900: "#9c9c9c",
        1000: "#ebebeb",
      },
      "blue-dark": {
        100: "#0f1c2e",
        200: "#0f1c2e",
        300: "#0f2f57",
        400: "#0d3868",
        500: "#0a4380",
        600: "#0091ff",
        700: "#0072f5",
        800: "#0062d1",
        900: "#52a8ff",
        1000: "#ebf6ff",
      },
      "red-dark": {
        100: "#2a1314",
        200: "#3c1618",
        300: "#561a1e",
        400: "#671e21",
        500: "#832126",
        600: "#e5484d",
        700: "#e5484d",
        800: "#d93036",
        900: "#ff6166",
        1000: "#feecee",
      },
      "amber-dark": {
        100: "#291800",
        200: "#331b00",
        300: "#4d2a00",
        400: "#573300",
        500: "#6b4105",
        600: "#e79d13",
        700: "#ffb224",
        800: "#ff990a",
        900: "#ff990a",
        1000: "#fef3dc",
      },
      "green-dark": {
        100: "#0b2212",
        200: "#0f2e18",
        300: "#12361b",
        400: "#0c451b",
        500: "#126426",
        600: "#1a9338",
        700: "#45a557",
        800: "#398e4a",
        900: "#62c073",
        1000: "#e5fbea",
      },
      "teal-dark": {
        100: "#04201b",
        200: "#062822",
        300: "#083a33",
        400: "#053d35",
        500: "#085e53",
        600: "#0c9784",
        700: "#12a594",
        800: "#0d8c7d",
        900: "#0ac7b4",
        1000: "#e0faf4",
      },
      "purple-dark": {
        100: "#231528",
        200: "#2e1938",
        300: "#422154",
        400: "#4f2768",
        500: "#5f2e85",
        600: "#8e4ec6",
        700: "#8e4ec6",
        800: "#763da9",
        900: "#bf7af0",
        1000: "#f8edfc",
      },
      "pink-dark": {
        100: "#28151d",
        200: "#3a1726",
        300: "#4f1c31",
        400: "#551b33",
        500: "#6c1e3e",
        600: "#b31a57",
        700: "#ea3e83",
        800: "#df2670",
        900: "#f75f8f",
        1000: "#feecf4",
      },
    },
  },
};
