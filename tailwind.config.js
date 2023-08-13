/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        content: {
          primary: withOpacityValue("--content-primary"),
        },
        primary: withOpacityValue("--primary"),
        secondary: withOpacityValue("--secondary"),
        brand: {
          primary: withOpacityValue("--brand-primary"),
        },
      },
    },
  },
  plugins: [],
};
