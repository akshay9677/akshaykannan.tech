function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "container-primary": withOpacityValue("--container-primary"),
        "container-secondary": withOpacityValue("--container-secondary"),
        "content-primary": withOpacityValue("--content-primary"),
        "content-secondary": withOpacityValue("--content-secondary"),
        "content-tertiary": withOpacityValue("--content-tertiary"),
        "border-primary": withOpacityValue("--border-primary"),
        "border-secondary": withOpacityValue("--border-secondary"),
      },
      animation: {
        shimmer: "shimmer 4s infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
