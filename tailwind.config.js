/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5333d6",

          secondary: "#f49cdb",

          accent: "#a4f2f0",

          neutral: "#1B1F22",

          "base-100": "#FAF9FB",

          info: "#1BB9F3",

          success: "#2BC5A6",

          warning: "#EB8305",

          error: "#E1376A",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
