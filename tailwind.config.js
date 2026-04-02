/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "guma-bg": "#04045e",
        "guma-panel": "#16213e",
        "guma-panel-2": "#1a2a4a",
        "guma-input": "#0f3460",
        "guma-dark": "#0f1e3d",
        "guma-footer": "#020338",
        "guma-gold": "#f0c040",
        "guma-gold-dark": "#c8960c",
        "guma-border": "#2a2a4a",
        "guma-border-2": "#2a2a5a",
        "guma-text": "#eeeeee",
        "guma-muted": "#aaaaaa",
        "guma-danger": "#7b0000",
        "guma-danger-h": "#cc0000",
      },
      boxShadow: {
        panel: "0 12px 32px rgba(0,0,0,.28)",
        canvas: "0 4px 24px rgba(0,0,0,.5)",
      },
      maxWidth: { "8xl": "1400px" },
      fontFamily: { sans: ["Segoe UI", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
