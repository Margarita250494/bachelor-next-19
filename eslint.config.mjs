import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,

  {
    rules: {
      // ⚠️ Warnt bei JSX-Texten, die leicht Hydration-Probleme verursachen
      "react/jsx-no-literals": [
        "warn",
        {
          noStrings: false,
          allowedStrings: [" ", ",", ".", "-", "–"]
        }
      ],

      // ❗ verhindert mehrzeilige Strings (sehr wichtig!)
      "no-multi-str": "error",

      // Optional: sauberere JSX-Struktur
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" }
      ]
    }
  },

  // Override default ignores of eslint-config-next
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ])
]);