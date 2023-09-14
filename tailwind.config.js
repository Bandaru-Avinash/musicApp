/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "colours-background-panel": "#fff",
        "colours-secondary-700": "#b33086",
        "colours-text-light-secondary": "#83858b",
        gainsboro: "#d9d9d9",
        "colours-text-light-primary": "#212529",
        paleturquoise: "#b2eecf",
        "colours-primary-900": "#165a60",
        "colours-gray-300": "#d1d5db",
        "colours-gray-200": "#e5e7eb",
        "colours-secondary-100": "#fedfe1",
        "colours-secondary-800": "#901e75",
        "colours-secondary-200": "#fec0ca",
        "colours-background-body": "#f4f4f4",
        "colours-primary-200": "#cff9df",
        "colours-primary-100": "#e6fced",
      },
      spacing: {},
      fontFamily: {
        "text-body-caption": "'Nunito Sans'",
      },
      borderRadius: {
        "2xs": "11px",
        "3xl": "22px",
      },
    },
    fontSize: {
      "4xs": "9px",
      xs: "12px",
      "3xl": "22px",
      sm: "14px",
      base: "16px",
      "9xl": "28px",
      "71xl": "90px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
