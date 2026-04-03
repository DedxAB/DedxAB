/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        cardForeground: "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        mutedForeground: "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        primaryForeground: "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        accentForeground: "hsl(var(--accent-foreground))",
        neonCyan: "hsl(var(--neon-cyan))",
        neonGreen: "hsl(var(--neon-green))",
        neonAmber: "hsl(var(--neon-amber))"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        pixel: ["var(--font-pixel)", "monospace"]
      },
      boxShadow: {
        neon: "0 0 8px rgba(156,201,255,.32), 0 0 18px rgba(156,201,255,.14)",
        panel: "0 20px 45px rgba(2, 8, 20, .45)"
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: ".86" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(156,201,255,.24)" },
          "50%": { boxShadow: "0 0 18px rgba(156,201,255,.42)" }
        }
      },
      animation: {
        flicker: "flicker 7s linear infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
