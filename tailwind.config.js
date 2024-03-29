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
      fontSize: {
        heading: [
          "0.75rem",
          {
            letterSpacing: "0.2rem",
            fontWeight: "bold",
          },
        ],
        "sub-heading": [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "600",
          },
        ],
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0.5 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { transform: "scale(0.8)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 800ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
